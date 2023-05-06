# 前言

:::tip 关于组件

项目虽然二次封装了一些组件，但是可能不能满足大部分的要求。所以，如果组件不满足你的要求，完全可以不用甚至删除代码自己写，不必坚持使用项目自带的组件。

:::

## Usage

packages文件夹下面的components，分有**常用组件**和**Antd封装组件**

常用组件引入`@gui-pkg/components`

Antd封装组件引入`@gui-pkg/antdcomponents`

### 常用组件使用示例
```vue
<template>
  <Icon icon="ion:layers-outline" :size="30" />
</template>

<script lang="ts">
  import { Icon } from '@gui-pkg/components';
</script>
```

### Antd组件使用示例
```vue
<template>
  <Modal @register="register" :minHeight="100" />
</template>

<script lang="ts">
  import { onMounted } from 'vue';
  import { useModal } from '@gui-pkg/antdcomponents';
  const [register, { openModal: openModal }] = useModal();

  onMounted(()=>{
    openModal(true);
  })
</script>
```
