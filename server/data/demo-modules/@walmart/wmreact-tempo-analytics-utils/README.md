# tempo-analytics-utils

Utilites for sending analytics on Tempo modules

> Before getting started, please make sure you read the [React Developer Guide](https://gecgithub01.walmart.com/react/react-dev-guide)!

## Installation

```
npm install @walmart/tempo-analytics-utils
```

## Usage

### Universal Click Tracking

To get universal click tracking on Tempo modules do the following.
At the top level component where the `TempoWrapper` is used:
- Wrap the component in `CollectorContext` from `@walmart/wmreact-analytics` and add a prop to specify the pageContext.
- Add `TempoAnalyticsCollector` as a child of `TempoWrapper`.
Example render:
```
<CollectorContext pageContext="MyPageContext">
  <div>
    <TempoWrapper>
      <TempoAnalyticsCollector />
      <TempoZone />
    </TempoWrapper>
  </div>
</CollectorContext>
```

On the component for each Tempo module where click tracking is desired:
- Wrap the component in a `CollectorContext` with a prop `moduleId` coming from Tempo.
Example render:
```
<CollectorContext moduleId={this.props.moduleData.moduleId}>
  <div data-module={this.props.moduleData.type} data-module-id={this.props.moduleData.moduleId}>
  </div>
</CollectorContext>
```

Then add the `universalClick` canary rule to your application.
Now beacons will be fired with all the required data when links are clicked.

## Development Guide

We have an ever-green guide to our development practices with this archetype.
[Click here](https://gecgithub01.walmart.com/electrode/electrode-archetype-react-component/blob/master/DEVELOPMENT.md)
before starting development on a component library.

## Scripts

If you want to use `builder` as a CLI tool (recommended), follow the instructions at [formidablelabs/builder to modify your `PATH`](https://github.com/formidablelabs/builder#local-install)

```
builder run test
```

To build /lib:

```
builder run build
```

##npm link

When using npm link, you must delete react from `zeus-components-layout/node_modules/`. This is because npm link is just a symlink, not a proper `npm install`.

You must also run `builder run build`

## Issues

Before submitting an issue, please see the [Issue Submission Guidelines](https://gecgithub01.walmart.com/react/react-dev-guide#submitting-issues)

## Contributing

If you're interested in contributing, see the [React Developer Guide's Contribution Guide](https://gecgithub01.walmart.com/react/react-dev-guide#contributing)
