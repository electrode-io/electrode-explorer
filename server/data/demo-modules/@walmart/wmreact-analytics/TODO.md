1. On Page Render, we need to fire off an event. This will be a "page is done loading event" The payload here will be performance data.
2. On Page Exit, we need to fire off an event.
3. Every `on*` event should be automagically published to multiple sources... Analytics + LogMon + Splunk + whatever...

```
Payload here will be at a minimum:
Component Name
Page
Possible info based on content of component. For example, button should say where it's going. Carousal should say, right or left carousal, etc.
Then dynamic business data. Like item information
```

4. Every HTTP call should be published
5. Any 404's or static asset failures should be published
6. Every JS exception should be published
