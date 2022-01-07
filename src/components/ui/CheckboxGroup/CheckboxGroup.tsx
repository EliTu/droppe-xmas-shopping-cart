import { CheckboxItemContainer, CheckboxGroupContainer } from './CheckboxGroup.styled';

export interface CheckboxItem {
	name: string;
	label: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	isChecked: boolean;
	style?: React.CSSProperties;
}

interface CheckboxGroupProps {
	items: CheckboxItem[];
	flexDirection?: 'row' | 'column';
}

function CheckboxGroup({ items, flexDirection = 'row' }: CheckboxGroupProps) {
	return (
		<CheckboxGroupContainer $flexDirection={flexDirection}>
			{items.map(({ label, name, isChecked, onChange }) => (
				<CheckboxItemContainer key={name}>
					<input type="checkbox" name={name} checked={isChecked} onChange={onChange} />
					<label htmlFor={name}>{label}</label>
				</CheckboxItemContainer>
			))}
		</CheckboxGroupContainer>
	);
}

export default CheckboxGroup;
