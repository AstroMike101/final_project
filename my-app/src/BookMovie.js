import { BrowserRouter as Router, Route, Switch, Link, useParams } from 'react-router-dom';
import { Button, Form, Input, Select, DatePicker, Dropdown, Space, Checkbox, Row, Col } from 'antd';
import { FieldTimeOutlined, DownOutlined, MinusCircleOutlined, PlusOutlined } from '@ant-design/icons'

import './index.css';

import flashimg from "./images/flash.jpg"
const onFinish = (values) => {
	console.log('Received values of form:', values);
};

function BookMovie(props) {
	return (
		<div class="booking-display">
			<div class="section-title">Book your tickets</div>
			<div class="booking-container">
				<div class="booking-display">
					<div class="movie-title">The Flash</div>
					<div class="movie-details">PG-13</div>
					<img src={flashimg} class="movie-banner" />
				</div>
				<div class="booking-form">
					<div class="section-title-minor">Choose showtime</div>
					<div class="booking-inner-row">
						<DatePicker />
						<Select
							defaultValue="8:00 PM"
							style={{
								width: 120,
							}}
							options={[
								{
									label: '8:00 PM',
									value: '1',
								},
								{
									label: '10:30 PM',
									value: '2',
								},
							]}
						/>
					</div>

					<div class="section-title-minor">Add tickets</div>

					<Form
						name="dynamic_form_nest_item"
						onFinish={onFinish}
						style={{
							maxWidth: 600,
						}}
						autoComplete="off"
					>
						<div class="booking-addtickets">
							<Form.List name="users">
								{(fields, { add, remove }) => (
									<>
										{fields.map(({ key, name, ...restField }) => (
											<Space
												key={key}
												style={{
													display: 'flex',
													marginBottom: 8,
												}}
												align="baseline"
											>
												<Form.Item
													{...restField}
													name={[name, 'first']}
													rules={[
														{
															required: true,
															message: 'Missing viewer\'s age',
														},
													]}
												>
													<Input placeholder="Viewer's Age" />
												</Form.Item>
												<MinusCircleOutlined onClick={() => remove(name)} />
											</Space>
										))}
										<div class="booking-display">
											<Form.Item>
												<Button type="dashed" onClick={() => add()} icon={<PlusOutlined />}>
													Add a ticket
												</Button>
											</Form.Item>
										</div>
									</>
								)}
							</Form.List>
						</div>
						<div class="booking-display">
							<div class="section-title-minor">Select seats</div>
							<Checkbox.Group
								style={{
									width: '80%',
								}}
							>
								<Row gutter={[2, 2]} flex="auto">
									<Col span={4}>
										<Checkbox value="A1">A1</Checkbox>
									</Col>
									<Col span={4}>
										<Checkbox value="A2">A2</Checkbox>
									</Col>
									<Col span={4}>
										<Checkbox value="A3">A3</Checkbox>
									</Col>
									<Col span={4}>
										<Checkbox value="A4">A4</Checkbox>
									</Col>
									<Col span={4}>
										<Checkbox value="A5">A5</Checkbox>
									</Col>
									<Col span={4}>
										<Checkbox value="A6">A6</Checkbox>
									</Col>

									<Col span={4}>
										<Checkbox value="B1">B1</Checkbox>
									</Col>
									<Col span={4}>
										<Checkbox value="B2">B2</Checkbox>
									</Col>
									<Col span={4}>
										<Checkbox value="B3">B3</Checkbox>
									</Col>
									<Col span={4}>
										<Checkbox value="B4">B4</Checkbox>
									</Col>
									<Col span={4}>
										<Checkbox value="B5">B5</Checkbox>
									</Col>
									<Col span={4}>
										<Checkbox value="B6">B6</Checkbox>
									</Col>

									<Col span={4}>
										<Checkbox value="C1">C1</Checkbox>
									</Col>
									<Col span={4}>
										<Checkbox value="C2">C2</Checkbox>
									</Col>
									<Col span={4}>
										<Checkbox value="C3">C3</Checkbox>
									</Col>
									<Col span={4}>
										<Checkbox value="C4">C4</Checkbox>
									</Col>
									<Col span={4}>
										<Checkbox value="C5">C5</Checkbox>
									</Col>
									<Col span={4}>
										<Checkbox value="C6">C6</Checkbox>
									</Col>

									<Col span={4}>
										<Checkbox value="D1">D1</Checkbox>
									</Col>
									<Col span={4}>
										<Checkbox value="D2">D2</Checkbox>
									</Col>
									<Col span={4}>
										<Checkbox value="D3">D3</Checkbox>
									</Col>
									<Col span={4}>
										<Checkbox value="D4">D4</Checkbox>
									</Col>
									<Col span={4}>
										<Checkbox value="D5">D5</Checkbox>
									</Col>
									<Col span={4}>
										<Checkbox value="D6">D6</Checkbox>
									</Col>
								</Row>

							</Checkbox.Group>

						</div>
						<div class="booking-display">
							<Form.Item>
								<Button type="primary" htmlType="submit">
									Book tickets
								</Button>
							</Form.Item>
						</div>
					</Form>


				</div>
			</div>
		</div>
	)
}

export default BookMovie;