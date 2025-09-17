import Link from "next/link";
export default function TOC() {
    return (
        <ul>
            <li>
                <Link href="/Labs" id="wd-home-link">Home</Link>
            </li>
            <li>
                <Link href="/Labs/Lab1" id="wd-lab1-link">Lab 1</Link>
            </li >
            <li>
                <Link href="/Labs/Lab2" id="wd-lab2-link"> Lab 2</Link>
            </li >
            <li>
                <Link href="/Labs/Lab3" id="wd-lab3-link"> Lab 3</Link>
            </li >
            <li>
                <Link href="/" id="wd-kambaz-link">Kambaz</Link>
            </li>
            <li>
                <a href="https://github.com/sissi0509/kambaz-next-js" id="wd-github"> My github repository </a>
            </li>

        </ul >
    );
}