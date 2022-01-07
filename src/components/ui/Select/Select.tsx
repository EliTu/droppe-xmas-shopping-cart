export interface Option {
	value: string;
	label: string;
	isDefault?: boolean;
}

interface SelectProps {
	name: string;
	options: Option[];
	onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
	disabled?: boolean;
}

function Select({ name, onChange, options, disabled }: SelectProps) {
	return (
		<select name={name} onChange={onChange}>
			{options.map(({ label, value, isDefault }) => (
				<option selected={isDefault} value={value}>
					{label}
				</option>
			))}
		</select>
	);
}

export default Select;
