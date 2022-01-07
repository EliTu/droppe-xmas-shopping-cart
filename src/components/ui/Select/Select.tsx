export interface Option {
	value: string;
	label: string;
}

interface SelectProps {
	name: string;
	options: Option[];
	onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
	disabled?: boolean;
}

function Select({ name, onChange, options, disabled }: SelectProps) {
	return (
		<select name={name} onChange={onChange} disabled={disabled}>
			{options.map(({ label, value }) => (
				<option key={label} value={value}>
					{label}
				</option>
			))}
		</select>
	);
}

export default Select;
