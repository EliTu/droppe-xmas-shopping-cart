import { OuterLabel, SelectContainer, StyledSelect } from './Select.styled';

export interface Option extends React.HTMLProps<HTMLOptionElement> {
	value: string;
	label: string;
}

interface SelectProps extends React.HTMLProps<HTMLSelectElement> {
	name: string;
	options: Option[];
	onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
	outerLabel?: string;
	disabled?: boolean;
}

function Select({ name, onChange, options, disabled, outerLabel = '' }: SelectProps) {
	return (
		<SelectContainer>
			{outerLabel && <OuterLabel>{outerLabel}</OuterLabel>}
			<StyledSelect name={name} onChange={onChange} disabled={disabled}>
				{options.map(({ label, value }) => (
					<option key={label} value={value}>
						{label}
					</option>
				))}
			</StyledSelect>
		</SelectContainer>
	);
}

export default Select;
