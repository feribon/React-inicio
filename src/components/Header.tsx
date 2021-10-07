type Props = {
    name: string;
    age: number;
}

export const Header = ({ name, age }: Props) => {
    return (
        <header>
            <h1>ola {name}, {age} anos</h1>
        </header>
    );
}
// export default Header; aqui ou na const