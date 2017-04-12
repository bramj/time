import React from 'react'
import { Button, Row, Col, Form, Radio } from 'elemental'

class Question extends React.Component {
  constructor (props) {
    super (props)
  }

  render() {
    const answers = this.props.answers.map((answer) =>
      <Radio name="answers" label={answer.label} value={answer.value} />
    )

    return (
      <Row>
        <Col sm="1/3">
          <Form>
          <h2 className='m2'>
            {this.props.question}
          </h2>
          {answers}
          <Button size="lg">Submit</Button>
          </Form>
        </Col>
      </Row>
    )
  }
}

export default Question
