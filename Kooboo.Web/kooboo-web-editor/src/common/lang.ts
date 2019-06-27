let kbLang = localStorage.getItem("lang");
if (!kbLang) kbLang = "en";
export const lang = kbLang;

const en = {
  MENU: "menu",
  EDIT: "edit",
  COPY: "copy",
  DELETE: "delete",
  EDIT_IMAGE: "edit image",
  EDIT_LINK: "edit link",
  JUMP_LINK: "jump link",
  EDIT_HTML_BLOCK: "edit html blick",
  OK: "ok",
  CANCEL: "cancel",
  PAGE_LINK: "page link",
  OUT_LINK: " out lint",
  EDIT_REPEAT: "edit repeat item",
  EDIT_MENU: "edit menu",
  EDIT_STYLE: "edit style",
  ALT: "alt",
  TITLE: "title",
  WIDTH: "width",
  HEIGHT: "height"
};

const zh = {
  MENU: "菜单",
  EDIT: "编辑",
  COPY: "复制这块",
  DELETE: "删除",
  EDIT_IMAGE: "编辑图片",
  EDIT_LINK: "编辑链接",
  JUMP_LINK: "跳转链接",
  EDIT_HTML_BLOCK: "编辑HTML代码块",
  CANCEL: "取消",
  OK: "确定",
  PAGE_LINK: "页面链接",
  OUT_LINK: "外部链接",
  EDIT_REPEAT: "编辑项目",
  EDIT_MENU: "编辑菜单",
  EDIT_STYLE: "编辑样式",
  ALT: "替代文本",
  HEIGHT: "高度",
  TITLE: "标题",
  WIDTH: "宽度"
} as typeof en;

var langPackages = { en, zh };
export const TEXT = langPackages[
  lang as keyof typeof langPackages
] as typeof en;
