## @superset-ui/plugin-chart-multiple-y-axis



This plugin provides Multiple Y Axis for Superset.

### Usage

Configure `key`, which can be any `string`, and register the plugin. This `key` will be used to lookup this chart throughout the app.

```js
import MultipleYAxisChartPlugin from '@superset-ui/plugin-chart-multiple-y-axis';

new MultipleYAxisChartPlugin()
  .configure({ key: 'multiple-y-axis' })
  .register();
```

Then use it via `SuperChart`. See [storybook](https://apache-superset.github.io/superset-ui/?selectedKind=plugin-chart-multiple-y-axis) for more details.

```js
<SuperChart
  chartType="multiple-y-axis"
  width={600}
  height={600}
  formData={...}
  queryData={{
    data: {...},
  }}
/>
```

### File structure generated

```
├── README.md
├── package.json
├── src
│   ├── MultipleYAxis.tsx
│   ├── images
│   │   └── thumbnail.png
│   ├── index.ts
│   ├── plugin
│   │   ├── buildQuery.ts
│   │   ├── controlPanel.ts
│   │   ├── index.ts
│   │   └── transformProps.ts
│   └── types.ts
├── test
│   └── index.test.ts
└── types
    └── external.d.ts
```