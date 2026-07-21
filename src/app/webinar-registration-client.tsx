'use client';

import Image from 'next/image';
import { useMemo, useState } from 'react';
import { registerForWebinar } from './actions';

const timeSlots = ['10:30am', '10:45am', '11:00am', '11:15am', '11:30am', '11:45am'];
const weekdayLabels = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
const calendarWindowDays = 30;
const monthFormatter = new Intl.DateTimeFormat('en-US', { month: 'long', year: 'numeric' });
const dayHeaderFormatter = new Intl.DateTimeFormat('en-US', { weekday: 'short', day: 'numeric' });
const selectedSlotDateFormatter = new Intl.DateTimeFormat('en-US', { weekday: 'short', month: 'long', day: 'numeric' });

function getBusinessDays(startDate: Date, count: number) {
  const days: Date[] = [];
  const cursor = new Date(startDate);

  while (days.length < count) {
    const day = cursor.getDay();
    if (day !== 0 && day !== 6) {
      days.push(new Date(cursor));
    }
    cursor.setDate(cursor.getDate() + 1);
  }

  return days;
}

function formatDateKey(date: Date) {
  return date.toISOString().slice(0, 10);
}

function ordinalSuffix(day: number) {
  const lastTwoDigits = day % 100;
  if (lastTwoDigits >= 11 && lastTwoDigits <= 13) return 'th';

  switch (day % 10) {
    case 1: return 'st';
    case 2: return 'nd';
    case 3: return 'rd';
    default: return 'th';
  }
}

function formatSelectedSlot(date: Date, time: string) {
  return `${selectedSlotDateFormatter.format(date)}${ordinalSuffix(date.getDate())} at ${time.toUpperCase()} PT`;
}

type CalendarDate = {
  isPlaceholder?: false;
  date: Date;
  isAvailable: boolean;
  isSelected: boolean;
  isCurrentMonth: boolean;
  monthLabel: string | null;
};

type CalendarPlaceholder = { isPlaceholder: true };

function buildCalendarDays(availableDays: Date[], selectedDay: Date): Array<CalendarDate | CalendarPlaceholder> {
  const firstAvailable = availableDays[0];
  const availableKeys = new Set(availableDays.map((day) => day.toDateString()));
  const start = new Date(firstAvailable);
  const days: Array<CalendarDate | CalendarPlaceholder> = [];

  for (let index = 0; index < start.getDay(); index += 1) {
    days.push({ isPlaceholder: true });
  }

  for (let index = 0; index < calendarWindowDays; index += 1) {
    const date = new Date(start);
    date.setDate(start.getDate() + index);
    days.push({
      date,
      isAvailable: availableKeys.has(date.toDateString()),
      isSelected: date.toDateString() === selectedDay.toDateString(),
      isCurrentMonth: date.getMonth() === firstAvailable.getMonth(),
      monthLabel: date.getDate() === 1 ? date.toLocaleString('en-US', { month: 'short' }).toUpperCase() : null,
    });
  }

  return days;
}

export default function WebinarRegistrationClient() {
  return (
    <section className="webinar" data-screen-label="Webinar registration">
        <div className="shell webinar-shell">
          <div className="webinar-copy">
            <span className="eyebrow webinar-eyebrow"><span className="live-dot" aria-hidden="true" />LIVE WEBINAR</span>
            <h2>IT&rsquo;s Time to Build:<br /><em>Your First AI Agent</em></h2>
            <p className="body">Join AgentHappy for a practical 30-minute session on designing, prompting, and deploying an IT agent that can triage requests, surface context, and help your team move from AI curiosity to useful automation.</p>
            <div className="speaker-row" aria-label="Webinar speakers">
              <div className="speaker-item">
                <Image className="speaker-avatar" src="/images/ava1.jpg" alt="Kenny Mack speaker avatar" width={44} height={44} style={{ objectFit: 'cover' }} />
                <div>
                  <strong>Kenny Mack</strong>
                  <span>Applied AI Engineer</span>
                </div>
              </div>
            </div>
            <div className="webinar-date">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M7 2v3M17 2v3M4 9h16M6 5h12a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Z" />
              </svg>
              <span>August 5, 2026 · 9:00 - 9:30 AM PT</span>
            </div>
          </div>
          <form className="webinar-card" id="webinar-registration-form" action={registerForWebinar}>
            <div className="field-grid">
              <label><span>First name</span><input type="text" name="firstName" autoComplete="given-name" required /></label>
              <label><span>Last name</span><input type="text" name="lastName" autoComplete="family-name" required /></label>
            </div>
            <label><span>Work email</span><input type="email" name="email" autoComplete="email" required /></label>
            <label><span>Phone number</span><input type="tel" name="phone" autoComplete="tel" required /></label>
            <label className="consent-row">
              <input type="checkbox" name="marketingConsent" defaultChecked />
              <span>I agree to receive webinar reminders and related resources from AgentHappy.</span>
            </label>
            <p className="webinar-terms">Want to talk through implementation? Choose a discovery slot in the calendar near the footer.</p>
            <p className="webinar-terms">By registering, you agree to receive communications about this event. Your information will be handled in accordance with our privacy practices, and you can unsubscribe at any time.</p>
            <button className="btn" type="submit">Download course outline</button>
          </form>
        </div>
    </section>
  );
}

export function BookingCalendarClient() {
  const availableBusinessDays = useMemo(() => getBusinessDays(new Date(), 12), []);
  const [selectedDateKey, setSelectedDateKey] = useState(() => formatDateKey(availableBusinessDays[0]));
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const selectedDay = availableBusinessDays.find((day) => formatDateKey(day) === selectedDateKey) ?? availableBusinessDays[0];
  const calendarDays = buildCalendarDays(availableBusinessDays, selectedDay);

  if (selectedTime) {
    return (
      <BookingDetailsForm
        selectedDay={selectedDay}
        selectedDateKey={selectedDateKey}
        selectedTime={selectedTime}
        onChangeTime={() => setSelectedTime(null)}
      />
    );
  }

  return (
    <BookingCalendar
      calendarDays={calendarDays}
      selectedDay={selectedDay}
      selectedTime={selectedTime}
      onSelectDate={(dateKey) => {
        setSelectedDateKey(dateKey);
        setSelectedTime(null);
      }}
      onSelectTime={setSelectedTime}
    />
  );
}

type BookingDetailsFormProps = {
  selectedDay: Date;
  selectedDateKey: string;
  selectedTime: string;
  onChangeTime: () => void;
};

function BookingDetailsForm({ selectedDay, selectedDateKey, selectedTime, onChangeTime }: BookingDetailsFormProps) {
  return (
    <section className="booking-section" id="book-a-call" data-screen-label="Calendar booking details">
      <div className="shell booking-shell">
        <div className="section-heading booking-heading">
          <span className="eyebrow">Book a call</span>
          <h2>Confirm your meeting.</h2>
          <p>Tell us who is joining and what you want to cover so we can make the discovery call useful from the first minute.</p>
        </div>
        <form className="booking-details-card" action={registerForWebinar}>
          <aside className="booking-details-summary">
            <Image className="calendar-avatar" src="/images/ava1.jpg" alt="Kenny Mack avatar" width={44} height={44} style={{ objectFit: 'cover' }} />
            <p className="calendar-host">Kenny Mack</p>
            <h3>Meeting with AgentHappy</h3>
            <div className="selected-slot" aria-label="Selected meeting time">
              <span aria-hidden="true">◷</span>
              <strong>{formatSelectedSlot(selectedDay, selectedTime)}</strong>
            </div>
            <p className="calendar-intro">30 minute Google Meet discovery call.</p>
            <button className="change-time-button" type="button" onClick={onChangeTime}>Change time</button>
          </aside>
          <div className="booking-details-fields">
            <input type="hidden" name="requestedDate" value={selectedDateKey} />
            <input type="hidden" name="requestedTime" value={selectedTime} />
            <div className="field-grid">
              <label><span>First name</span><input type="text" name="firstName" autoComplete="given-name" required /></label>
              <label><span>Last name</span><input type="text" name="lastName" autoComplete="family-name" required /></label>
            </div>
            <label><span>Work email</span><input type="email" name="email" autoComplete="email" required /></label>
            <label><span>Reason for meeting</span><textarea name="meetingReason" rows={5} placeholder="Tell us about your AI goals, blockers, or the workflow you want to improve." required /></label>
            <label className="consent-row">
              <input type="checkbox" name="marketingConsent" defaultChecked />
              <span>I agree to receive meeting follow-up and related resources from AgentHappy.</span>
            </label>
            <button className="btn" type="submit">Schedule meeting</button>
          </div>
        </form>
      </div>
    </section>
  );
}

type CalendarDay = ReturnType<typeof buildCalendarDays>[number];

type BookingCalendarProps = {
  calendarDays: CalendarDay[];
  selectedDay: Date;
  selectedTime: string | null;
  onSelectDate: (dateKey: string) => void;
  onSelectTime: (time: string) => void;
};

function BookingCalendar({ calendarDays, selectedDay, selectedTime, onSelectDate, onSelectTime }: BookingCalendarProps) {
  return (
    <section className="booking-section" id="book-a-call" data-screen-label="Calendar booking">
      <div className="shell booking-shell">
        <div className="section-heading booking-heading">
          <span className="eyebrow">Book a call</span>
          <h2>Choose a discovery slot.</h2>
          <p>Pick from the next 12 business days so we can talk through your AI goals, blockers, and fastest path to implementation.</p>
        </div>
        <div className="calendar-card" aria-label="Meeting calendar">
          <aside className="calendar-profile">
            <Image className="calendar-avatar" src="/images/ava1.jpg" alt="Kenny Mack avatar" width={44} height={44} style={{ objectFit: 'cover' }} />
            <p className="calendar-host">Kenny Mack</p>
            <h3>Meeting with AgentHappy</h3>
            <p className="calendar-intro">In this call, we&apos;ll dive into:</p>
            <ul><li>Your business and goals</li><li>Challenges to solve</li><li>Your current AI workflows</li><li>How we can help you</li></ul>
            <div className="calendar-meta-list">
              <div className="calendar-meta"><span aria-hidden="true">◷</span><strong>30m</strong></div>
              <div className="calendar-meta"><span aria-hidden="true">▣</span>Google Meet</div>
              <div className="calendar-meta"><span aria-hidden="true">◎</span>America/Los Angeles</div>
            </div>
          </aside>
          <div className="calendar-month">
            <div className="calendar-month-bar"><h3>{monthFormatter.format(selectedDay)}</h3><div className="calendar-arrows" aria-hidden="true"><span>‹</span><span>›</span></div></div>
            <div className="calendar-weekdays" aria-hidden="true">{weekdayLabels.map((day) => <span key={day}>{day}</span>)}</div>
            <div className="calendar-grid">
              {calendarDays.map((day, index) => {
                if (day.isPlaceholder) {
                  return <span className="calendar-day is-placeholder" key={`placeholder-${index}`} aria-hidden="true" />;
                }

                const dateKey = formatDateKey(day.date);
                const dayLabel = `${day.date.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}${day.isAvailable ? ' available' : ' unavailable'}`;
                const dayClassName = `calendar-day${day.isAvailable ? ' is-available' : ''}${day.isSelected ? ' is-selected' : ''}`;

                if (!day.isAvailable) {
                  return <span className={dayClassName} key={day.date.toISOString()} aria-label={dayLabel}><span>{day.date.getDate()}</span>{day.monthLabel ? <em>{day.monthLabel}</em> : null}</span>;
                }

                return (
                  <button className={dayClassName} type="button" key={day.date.toISOString()} aria-label={dayLabel} onClick={() => onSelectDate(dateKey)}>
                    <span>{day.date.getDate()}</span>{day.isSelected ? <i aria-hidden="true" /> : null}{day.monthLabel ? <em>{day.monthLabel}</em> : null}
                  </button>
                );
              })}
            </div>
          </div>
          <aside className="calendar-times">
            <div className="calendar-times-head"><h3>{dayHeaderFormatter.format(selectedDay)}</h3><div className="time-toggle" aria-label="Time format"><span>12h</span><span>24h</span></div></div>
            <div className="time-list">
              {timeSlots.map((slot) => <button className={slot === selectedTime ? 'is-selected' : undefined} type="button" key={slot} onClick={() => onSelectTime(slot)}>{slot}</button>)}
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
