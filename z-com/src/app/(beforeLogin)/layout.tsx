import style from "./page.module.css";

type Props = {
  children: React.ReactNode;
  modal: React.ReactNode;
};

export default function BeforeLoginLayout({ children, modal }: Props) {
  return (
    <div className={style.container}>
      Before Login Layout
      {children}
      {modal}
    </div>
  );
}
