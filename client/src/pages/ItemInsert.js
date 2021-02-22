import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Button from 'react-bootstrap/Button'
import axios from "axios";
import { useHistory } from "react-router-dom";
import "./ItemInsert.css";

const ItemInsert = () => {
	const history = useHistory();

	async function placeSubmitHandler(values, { setSubmitting, resetForm }) {
		setSubmitting(true);
		try {
			const headers = {
				"Content-Type": "application/json",
			};
			const response = await axios.post(
				"http://localhost:3000/api/book",
				{
					Title: values.title,
                    Authors: values.author,
                    Year_Of_Publication: values.publciationYear,
                    Number_Of_Copies: values.copies,
                    ISBN: values.isbn,
				},
				headers
			);
			console.log(response);
			setSubmitting(false);
			history.push("/items");
		} catch (error) {
			setSubmitting(false);
			console.log("error creating book");
		}
	}

	const validationSchema = Yup.object().shape({
		title: Yup.string().required("Username is required"),
		author: Yup.string().required("Author is required"),
	});

	return (
		<React.Fragment>
			<h2>Add Books</h2>
			<Formik
				initialValues={{ title: "", author: "", publciationYear: "", copies: "", isbn: "", isSubmitting: true }}
				validationSchema={validationSchema}
				// onSubmit={bookSubmitHandler}
			>
				{/* Attirbutes from Formick API */}
				{({
					values,
					errors,
					touched,
					dirty,
					isSubmitting,
					handleChange,
					handleBlur,
					handleReset,
					handleSubmit,
				}) => (
					<Form
						className="post-form"
						noValidate
					>
						{/* title */}
						<div className="">
							<label htmlFor="title">Book Title </label>
							<Field
								type="text"
								name="title"
								className={`${touched.title && errors.title ? "is-invalid" : ""}`}
							/>
							{/* <ErrorMessage component="div" name="title" className="danger" /> */}
						</div>
						{/* author */}
						<div className="">
							<label htmlFor="author">Author </label>
							<Field
								// component="textarea"
								type="text"
								name="author"
								className={`${
									touched.author && errors.author ? "is-invalid" : ""
								}`}
							/>
							{/* <ErrorMessage component="div" name="description" className="red-text" /> */}
						</div>
                        {/* publication year */}
						<div className="">
							<label htmlFor="publciationYear">Year of Publication</label>
							<Field
								type="text"
								name="publicationYear"
								className={`${
									touched.publciationYear && errors.publciationYear ? "is-invalid" : ""
								}`}
							/>
							{/* <ErrorMessage component="div" name="publicationYear" className="red-text" /> */}
						</div>
                        {/* copies */}
						<div className="">
							<label htmlFor="copies">Copies </label>
							<Field
								type="text"
								name="copies"
								className={`${
									touched.copies && errors.copies ? "is-invalid" : ""
								}`}
							/>
							{/* <ErrorMessage component="div" name="copies" className="red-text" /> */}
						</div>
                        {/* isbn */}
						<div className="">
							<label htmlFor="isbn">ISBN </label>
							<Field
								type="text"
								name="isbn"
								className={`${
									touched.isbn && errors.isbn? "is-invalid" : ""
								}`}
							/>
							{/* <ErrorMessage component="div" name="isbn" className="red-text" /> */}
						</div>
						<Button type="submit" node="button" disabled={isSubmitting}>
							Submit
						</Button>
					</Form>
				)}
			</Formik>
		</React.Fragment>
	);
};

export default ItemInsert;










// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import { insertSingleItem } from '../actions';
// import { shared } from '../constants';

// import styled from 'styled-components';

// const Title = styled.h1.attrs({
//     className: 'h1',
// })``;

// const Wrapper = styled.div.attrs({
//     className: 'form-group',
// })`
//     margin-top: 0 30px;
// `;

// const Label = styled.label`
//     margin: 5px;
//     max-width: 30%;

//     @media screen and (max-width: 420px) {
//         height: auto;
//         max-width: 75%;
//     }
// `;

// const InputText = styled.input.attrs({
//     className: 'form-control',
// })`
//     margin: 5px auto;
//     max-width: 30%;
//     text-align: center;

//     @media screen and (max-width: 420px) {
//         height: auto;
//         max-width: 75%;
//     }
// `;

// const Fieldset = styled.fieldset.attrs({
//     className: 'form-control',
// })`
//     background-color: transparent;
//     border-color: transparent;
//     margin: 1em auto 0.5em;
//     max-width: 50%;
//     min-height: 6em;

//     @media screen and (max-width: 420px) {
//         height: auto;
//         max-width: 75%;
//     }
// `;

// const DayInput = styled.input.attrs({
//     className: '',
// })`
//     margin: 5px 5px 5px auto;
//     text-align: center;
// `;

// const Button = styled.button.attrs({
//     className: 'btn btn-primary',
// })`
//   margin: 15px 15px 15px 5px;
// `;

// const CancelButton = styled.a.attrs({
//     className: 'btn btn-danger',
// })`
//   margin: 15px 15px 15px 5px;
// `;

// class ItemInsert extends Component {
//     constructor(props) {
//         /**
//          * Currently deprecated and now known as the "legacy context":
//          * - https://reactjs.org/docs/legacy-context.html
//          *
//          * TODO: refactor to use new Context API:
//          * - https://reactjs.org/docs/context.html
//          */
//         super(props);
//         this.state = {
//             name: '',
//             daysOfWeek: {},
//             timeframeNote: '',
//             priority: 0,
//             content: '',
//         };
//     }

//     handleChangeInputName = async event => {
//         const name = event.target.value;
//         this.setState({ name });
//     }

//     handleChangeDays = async event => {
//         const { checked, value } = event.target;
//         const { daysOfWeek } = this.state;
//         const { DAYS_OF_WEEK } = shared;

//         if (checked && !daysOfWeek[value]) {
//             daysOfWeek[value] = DAYS_OF_WEEK[value];
//         } else if (!checked && daysOfWeek[value]) {
//             delete daysOfWeek[value];
//         }
//         this.setState({ daysOfWeek });
//     }

//     handleChangeInputTimeframe = async event => {
//         const timeframeNote = event.target.value;
//         this.setState({ timeframeNote });
//     }

//     handleChangeInputPriority = async event => {
//         const priority = event.target.validity.valid
//             ? event.target.value
//             : this.state.priority;

//         this.setState({ priority });
//     }

//     handleChangeInputContent = async event => {
//         const content = event.target.value;
//         this.setState({ content });
//     }

//     handleInsertItem = event => {
//         event.preventDefault();

//         const {
//             name,
//             daysOfWeek,
//             timeframeNote,
//             priority,
//             content
//         } = this.state;
//         const item = { name, daysOfWeek, timeframeNote, priority, content };

//         this.props.insertSingleItem(item)
//             .then(resp => {
//                 console.log("handleInsertItem: resp");
//                 console.log(resp);
//                 if (typeof resp === "object" && (resp.status < 300 && resp.status >= 200)) {
//                     window.alert('Item inserted successfully');
//                     this.setState({
//                         name: '',
//                         daysOfWeek: {},
//                         timeframeNote: '',
//                         priority: 0,
//                         content: '',
//                     });
//                 } else {
//                     throw resp;
//                 }
//             })
//             .catch(err => {
//                 // TODO: pass error object correctly so that things like validation errors can be displayed to user
//                 window.alert(`There was an error creating the item... :(`);
//                 console.log("handleInsertItem: err");
//                 console.log(err);
//             })
//     }

//     render() {
//         const {
//             name,
//             daysOfWeek,
//             timeframeNote,
//             priority,
//             content
//         } = this.state;

//         const { DAYS_OF_WEEK } = shared;

//         return (
//             <Wrapper>
//                 <Title>Create Item</Title>

//                 <Label>Name: </Label>
//                 <InputText
//                     type="text"
//                     value={name}
//                     onChange={this.handleChangeInputName}
//                 />

//                 <Fieldset>
//                     <legend>Day(s) of the Week: </legend>
//                     {Object.keys(DAYS_OF_WEEK).map((day, i) => (
//                         <React.Fragment
//                             key={day}
//                         >
//                             <Label
//                                 htmlFor={day}
//                             >
//                                 <DayInput
//                                     type="checkbox"
//                                     id={day}
//                                     value={day}
//                                     onChange={this.handleChangeDays}
//                                     checked={typeof daysOfWeek[day] === "string"}
//                                 />
//                                 { DAYS_OF_WEEK[day] }
//                             </Label>
//                         </React.Fragment>
//                     ))}
//                 </Fieldset>

//                 <Label>Timeframe Note: </Label>
//                 <InputText
//                     type="text"
//                     value={timeframeNote}
//                     onChange={this.handleChangeInputTimeframe}
//                 />

//                 <Label>Priority: </Label>
//                 <InputText
//                     type="number"
//                     step="0.1"
//                     lang="en-US"
//                     min="0"
//                     max="1000"
//                     pattern="[0-9]+([,\.][0-9]+)?"
//                     value={priority}
//                     onChange={this.handleChangeInputPriority}
//                 />

//                 <Label>Content: </Label>
//                 <InputText
//                     type="textarea"
//                     value={content}
//                     onChange={this.handleChangeInputContent}
//                 />

//                 <Button onClick={this.handleInsertItem}>Add Item</Button>
//                 <CancelButton href={'/items/list'}>Cancel</CancelButton>
                
//             </Wrapper>

//         );
//     }
// }

// const mapDispatchToProps = dispatch => bindActionCreators({ insertSingleItem }, dispatch);

// export default connect(null, mapDispatchToProps)(ItemInsert);
