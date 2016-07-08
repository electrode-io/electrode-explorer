react-date-picker
=================

#### 4.0.6 
 * add `highlightWeekends` prop. Defaults to false.

#### 4.0.4
 * add `weekNumberName` prop
 
#### 4.0.2 
 * add `weekNumbers` boolean prop - defaults to false - accepting PR [#36](https://github.com/zippyui/react-date-picker/pull/36) - thanks Christian Alfoni. Also add `renderWeekNumber` prop

#### 4.0.0
 * React 0.14 as peer dep
 
#### 3.1.9
 * accept PR [#56](https://github.com/zippyui/react-date-picker/pull/56) - fixes[#55 - if 1st day is sunday, first week is entire previous month](https://github.com/zippyui/react-date-picker/issues/55)
 * add `alwaysShowPrevWeek` prop

#### 3.1.6
 * update `object-assign` to `4.0.1`
 
#### 3.1.5
 * fix `style` and `className` props to also keep `date-picker` className if a className is provided.
 
#### 3.1.4
 * add `isDisabled` prop to props passed in `renderDay`
 * add `beforeMinDate` prop to props passed in `renderDay` - only set if the day to be rendered is before the specified `minDate`
 * add `afterMaxDate` prop to props passed in `renderDay` - only set if the day to be rendered is after the specified `maxDate`

#### 3.1.0
 * Add theme (`hackerone`) and made theme addition easy
 * accept PR [#44](https://github.com/zippyui/react-date-picker/pull/44)
 * accept PR [#45](https://github.com/zippyui/react-date-picker/pull/45)
 
#### 3.0.1
 * Fix styling issues introduced in `3.0.0`
 
#### 3.0.0
 * Implement picker using `flex` layout (replacing `table` layout). This allows the picker to fill all available space and not rely on fixed height.

#### v2.1.7

 * fix [#41 - minDate wrong when passing momentjs instance](https://github.com/zippyui/react-date-picker/issues/41)

#### v2.1.5

 * fix various accessibility issues and add tab navigation - accept PR [#35](https://github.com/zippyui/react-date-picker/pull/35)

#### v2.1.4

 * accept PR [#37](https://github.com/zippyui/react-date-picker/pull/37)

#### v2.1.3

 * fix [#33](https://github.com/zippyui/react-date-picker/issues/33)

#### v2.1.0

 * remove normalize.css dependency
 * remove 'sans-serif'  font-family from css - font will be inherited from parent node

#### v2.0.12

 * add CI integration - see https://circleci.com/gh/zippyui/react-date-picker

#### v2.0.0

 * `onChange`, `onSelect`, `onNav` are called with date string first, and then the moment instance. So the first 2 args are inverted from previous versions
 * add support for better i18n - through `locale`, `weekStartDay` and `weekDayNames` props
 * made `viewDate` and `view` controlled. Introduced uncontrolled alternatives `defaultViewDate`(default to `date` or now) and `defaultView` (defaults to `"month"`)
 * add `onViewDateChange` and `onViewChange` props that can be used to handle the changes for the respective properties
 * add `navOnDateClick` - defaults to true. If false, will not navigate to the date that was clicked, even if that date is in the prev/next month
 * add `dayFormat`, `monthFormat`, `yearFormat`

Starting v 2.0.0 `react-date-picker` is moved to [zippyui](http://github.com/zippyui).

#### v1.4.0

 * `today` and `gotoSelected` are renamed as `todayText` and `gotoSelectedText`. Old names are now deprecated, and will be removed in a future minor version.
 * add `renderFooter` prop, which can be used to render a different footer.
 * change the behavior of `renderDay` prop: if it now returns undefined, we assume it just changed props, so we render the default cell, with the updated props. This means you can use `renderDay` both to affect the props object passed to day cells and/or the render a completely different cell

#### v1.3.0
 * `renderDay` & `onRenderDay` properties are available to allow full control over day-cell rendering
 * `onNav` is called with new args: moment, text, view, direction - where moment is a date as a momentjs instance, text is the date formatted as text, the view is the view name ('month','year','decade') and direction is 1 (nav to next period) or -1 (nav to prev period)
 * `onSelect` is called with new args: moment, text, view
