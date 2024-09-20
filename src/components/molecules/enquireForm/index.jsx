import { useState, memo } from "react";
import { Button, Column, Input, TextArea, Row } from "../../atoms";
import { enquireConst as CONST } from './constants';
import { Container } from "./styles.jsx";

function EnquireForm() {
    const fields = CONST.fields;
    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    return (
        <Container $width={480}>
            <form onSubmit={handleSubmit}>
                <Column $gap={16}>
                    <Row
                        $justifySpaceBetween
                        $gap={14}
                    >
                        <Input
                            name={"lastName"}
                            value={inputs.lastName || ""}
                            placeholder={fields.lastName}
                            onChange={handleChange}
                        />
                        <Input
                            name={"firstName"}
                            value={inputs.firstName || ""}
                            placeholder={fields.firstName}
                            onChange={handleChange}
                        />
                    </Row>
                    <Row>
                        <Input
                            name={"email"}
                            value={inputs.email || ""}
                            placeholder={fields.email}
                            onChange={handleChange}
                        />
                    </Row>
                    <Row>
                        <Input
                            name={"phone"}
                            value={inputs.phone || ""}
                            placeholder={fields.phone}
                            onChange={handleChange}
                        />
                    </Row>
                    <Row>
                        <TextArea
                            className="enquiry-input-msg"
                            name={"message"}
                            value={inputs.message || ""}
                            placeholder={fields.msg}
                            onChange={handleChange}
                            rows="4"
                        />
                    </Row>
                    <Button
                        $height={40}
                        $fillParent
                        $secondary
                        type="submit"
                    >
                        Submit
                    </Button>
                </Column>
            </form>
        </Container>
    );
}


export default memo(EnquireForm);

