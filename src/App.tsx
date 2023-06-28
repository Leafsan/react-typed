import React, { useState } from "react";
import { styled } from "styled-components";

const Container = styled.div`
    background-color: ${(props) => props.theme.bgColor};
`;

const H1 = styled.h1`
    color: ${(props) => props.theme.textColor};
`;

function App() {
    const [value, setValue] = useState<string>("");

    const onChange = (event: React.FormEvent<HTMLInputElement>) => {
        const {
            currentTarget: { value },
        } = event;
        setValue(value);
    };

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(value);
        setValue("");
    };

    return (
        <>
            <Container>
                <H1>hello</H1>
            </Container>
            <div>
                <form onSubmit={onSubmit}>
                    <input
                        type="text"
                        placeholder="userName"
                        value={value}
                        onChange={onChange}
                    />
                    <input type="submit" value="login" />
                </form>
            </div>
        </>
    );
}

export default App;
