import { mount } from "@vue/test-utils";
import CustomButton from "../components/Button.vue";
import ChildButton from "../components/ChildButton.vue";

describe("Button 組件測試", () => {
  it("點擊按鈕後 div 顯示數字", async () => {
    const wrapper = mount(CustomButton);
    const child_wrapper = wrapper.findComponent(ChildButton);

    // 驗證初始值
    expect(child_wrapper.find(".show_text").text()).toBe("0");

    // 取得按鈕並觸發點擊事件
    const button = child_wrapper.find("button");
    await button.trigger("click");
    await button.trigger("click");

    // 驗證點擊後的 div 數值
    expect(child_wrapper.find(".show_text").text()).toBe("2");
  });
});
