interface HeaderProps {
  genreTitle: string
}
export function Header(props: HeaderProps){
  const { genreTitle } = props
  return (
    <header>
      <span className="category">Categoria:<span> {genreTitle}</span></span>
    </header>
  )
}