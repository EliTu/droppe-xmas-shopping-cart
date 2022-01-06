import { InfoLabelContainer, LabelField, ValueField } from './InfoLabel.styled';

interface InfoLabelProps {
	label: string;
	value: string | number;
	fontSize?: number;
}

function InfoLabel({ label, value, fontSize = 13 }: InfoLabelProps) {
	return (
		<InfoLabelContainer $fontSize={fontSize}>
			<LabelField>{label}:</LabelField>
			<ValueField>{value}</ValueField>
		</InfoLabelContainer>
	);
}

export default InfoLabel;
