import React from 'react'

const SchedulingContainer = () => {
return (
  <>
    {/* Calendly link widget begin */}
    <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />
    <script src="https://assets.calendly.com/assets/external/widget.js" type="text/javascript" />
    <a href="" onClick="Calendly.initPopupWidget({url: 'https://calendly.com/wlhtck/15-minute-video-call'});return false;">Schedule time with me</a>
    {/* Calendly link widget end */}
  </>)
}
