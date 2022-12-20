interface IProps {
    color: string,
    children: string,
    shadow?: boolean,
    width?: string
}

const Button = (props: IProps) => {
    const { color, children, shadow, width } = props;
    console.log(color);
    const classList = `bg-${color} ${shadow ? "shadow-inset" : ""} rounded-full ${width ? `w-${width}` : ""}`;

    return (
        <button type="button" className={classList}>
            {children}
        </button>
    )
}

export default Button;