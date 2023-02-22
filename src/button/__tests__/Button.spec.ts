import { mount } from "@vue/test-utils";
import Button from "../button.vue";
import { shallowMount } from "@vue/test-utils";
import { describe, expect, test } from "vitest";
 
 
test("type", () => {
  const wrapper = mount(Button, {
    props: {
      type: "primary",
    },
  });
  expect(wrapper.classes()).toContain("button-primary");
});
test("type", () => {
  const wrapper = mount(Button, {
    props: {
      type: "success",
    },
  });
  expect(wrapper.classes()).toContain("button-success");
});
test("type", () => {
  const wrapper = mount(Button, {
    props: {
      type: "info",
    },
  });
  expect(wrapper.classes()).toContain("button-info");
});
test("type", () => {
  const wrapper = mount(Button, {
    props: {
      type: "warning",
    },
  });
  expect(wrapper.classes()).toContain("button-warning");
});
test("type", () => {
  const wrapper = mount(Button, {
    props: {
      type: "danger",
    },
  });
  expect(wrapper.classes()).toContain("button-danger");
});

 
test("plain", () => {
  const wrapper = mount(Button, {
    props: {
      plain: true,
    },
  });
  expect(wrapper.classes()).toContain("is-plain");
});

test("round", () => {
  const wrapper = mount(Button, {
    props: {
      round: true,
    },
  });
  expect(wrapper.classes()).toContain("is-round");
});
 
test("circle", () => {
  const wrapper = mount(Button, {
    props: {
      circle: true,
    },
  });
  expect(wrapper.classes()).toContain("is-circle");
});

test("loading", () => {
  const wrapper = mount(Button, {
    props: {
      loading: true,
    },
  });
  expect(wrapper.find(".sky-icon-refresh").exists()).toBe(true);
  expect(wrapper.classes()).toContain("is-loading");
});
 
describe("icon", () => {
  test("should show icon element", () => {
    const wrapper = mount(Button, {
      props: {
        icon: "sky-icon-edit",
      },
    });
    expect(wrapper.find(".sky-icon-edit").exists()).toBe(true);
  });
});
 
