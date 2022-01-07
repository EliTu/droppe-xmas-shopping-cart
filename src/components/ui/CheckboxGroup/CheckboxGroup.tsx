import { CheckboxItemContainer, CheckboxGroupContainer } from './CheckboxGroup.styled';

export interface CheckboxItem {
	name: string;
	label: string;
	isChecked: boolean;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	style?: React.CSSProperties;
	disabled?: boolean;
}

interface CheckboxGroupProps {
	items: CheckboxItem[];
	flexDirection?: 'row' | 'column';
}

function CheckboxGroup({ items, flexDirection = 'row' }: CheckboxGroupProps) {
	return (
		<CheckboxGroupContainer $flexDirection={flexDirection}>
			{items.map(({ label, name, isChecked, onChange, disabled }) => (
				<CheckboxItemContainer key={name}>
					<input type="checkbox" id={name} name={name} checked={isChecked} onChange={onChange} disabled={disabled} />
					<label htmlFor={name}>{label}</label>
				</CheckboxItemContainer>
			))}
		</CheckboxGroupContainer>
	);
}

export default CheckboxGroup;
