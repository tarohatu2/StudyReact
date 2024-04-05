import { fn } from "@storybook/test";
import { PhotoGridView } from "./PhotoGridView";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: "Components/PhotoGridView",
  component: PhotoGridView,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Main = {
  args: {
    photos: [
      {
        imageUrl: 'https://img.benesse-cms.jp/pet-cat/item/image/normal/f3978ebc-9030-49e7-aa5e-4a370a955e1b.jpg?w=576&h=576&resize_type=cover&resize_mode=force&p=true',
        alt: '風景の写真',
        title: 'ある夏の日'
      },
      {
        imageUrl: 'https://img.benesse-cms.jp/pet-cat/item/image/normal/f3978ebc-9030-49e7-aa5e-4a370a955e1b.jpg?w=576&h=576&resize_type=cover&resize_mode=force&p=true',
        alt: '風景の写真',
        title: 'ある夏の日'
      },
      {
        imageUrl: 'https://img.benesse-cms.jp/pet-cat/item/image/normal/f3978ebc-9030-49e7-aa5e-4a370a955e1b.jpg?w=576&h=576&resize_type=cover&resize_mode=force&p=true',
        alt: '風景の写真',
        title: 'ある夏の日'
      },
      {
        imageUrl: 'https://img.benesse-cms.jp/pet-cat/item/image/normal/f3978ebc-9030-49e7-aa5e-4a370a955e1b.jpg?w=576&h=576&resize_type=cover&resize_mode=force&p=true',
        alt: '風景の写真',
        title: 'ある夏の日'
      },
      {
        imageUrl: 'https://img.benesse-cms.jp/pet-cat/item/image/normal/f3978ebc-9030-49e7-aa5e-4a370a955e1b.jpg?w=576&h=576&resize_type=cover&resize_mode=force&p=true',
        alt: '風景の写真',
        title: 'ある夏の日'
      },
      {
        imageUrl: 'https://img.benesse-cms.jp/pet-cat/item/image/normal/f3978ebc-9030-49e7-aa5e-4a370a955e1b.jpg?w=576&h=576&resize_type=cover&resize_mode=force&p=true',
        alt: '風景の写真',
        title: 'ある夏の日'
      }
    ]
  },
};
