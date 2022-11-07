import * as Tabs from '@radix-ui/react-tabs';

const TabsExample = () => {
    return (
    <Tabs.Root defaultValue="tab1" orientation="horizontal">
    <Tabs.List aria-label="tabs example">
      <Tabs.Trigger value="tab1">One</Tabs.Trigger>
      <Tabs.Trigger value="tab2">Two</Tabs.Trigger>
      <Tabs.Trigger value="tab3">Three</Tabs.Trigger>
    </Tabs.List>
    <Tabs.Content value="tab1">Tab one cofdfdfdntent</Tabs.Content>
    <Tabs.Content value="tab2">Tab two content</Tabs.Content>
    <Tabs.Content value="tab3">Tab three content</Tabs.Content>
  </Tabs.Root>
    );
    };

export default TabsExample;