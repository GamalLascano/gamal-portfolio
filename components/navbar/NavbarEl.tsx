import NavbarProps from "@/types/Navbarprops";

const ACTIVE_STYLE_BUTTON =
  "py-2 text-white bg-gradient-to-br from-purple-600 to-blue-500 text-xl px-1 rounded-lg m-1 transition-all ease-in delay-50 h-12";
const ACTIVE_STYLE_SPAN =
  "relative px-5 py-2 bg-white dark:bg-gray-900 rounded-md transition-all";
const INACTIVE_STYLE_BUTTON =
  "py-2 text-white text-sm transition-all ease-in delay-50";
const INACTIVE_STYLE_SPAN = "transition-all";
function NavbarEl(data: NavbarProps) {
  return (
    <button
      onClick={data.setActive}
      className={
        data.activeItem == Number.parseInt(data.id)
          ? ACTIVE_STYLE_BUTTON
          : INACTIVE_STYLE_BUTTON
      }
      id={data.id}
    >
      <span
        className={
          data.activeItem == Number.parseInt(data.id)
            ? ACTIVE_STYLE_SPAN
            : INACTIVE_STYLE_SPAN
        }
      >
        {data.children}
      </span>
    </button>
  );
}
export default NavbarEl;
