import { mount } from "@vue/test-utils";
import CustomButton from "../components/Button.vue";

// 這段程式碼的目的是測試 App 組件是否可以正確地掛載，並且在掛載過程中不會出現錯誤。

// describe 函數是用來定義一個測試套件
describe("first test", () => {
  // it 函數是用來定義一個測試用例
  it("mounts without errors", () => {
    // mount 函數是用來掛載一個 Vue 組件並返回一個包裹器物件
    const wrapper = mount(CustomButton);

    expect(wrapper).toBeTruthy();
  });
});
