import { useState } from "react";

const useForm = (initialValue) => {
	const [form, setForm] = useState(initialValue);

	const onChange = (name, value) => {
		const newForm = { ...form, [name]: value };

		setForm(newForm);
	};

	return { form, onChange };
};

export default useForm;
