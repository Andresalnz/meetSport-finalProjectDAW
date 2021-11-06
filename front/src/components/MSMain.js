import { Main } from 'grommet';
import { Outlet } from "react-router-dom";

export default function MSMain() {
  return (
    <Main pad="small">
      <Outlet />
    </Main>
  );
}