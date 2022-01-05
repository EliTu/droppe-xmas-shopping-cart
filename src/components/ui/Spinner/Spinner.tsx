import { SpinnerContainer } from './Spinner.styled';

enum SpinnerTypes {
	DEFAULT = 'default',
}

interface SpinnerProps {
	type?: SpinnerTypes;
	color?: string;
	size?: number;
}

function Spinner({ type = SpinnerTypes.DEFAULT, color = 'dodgerBlue', size = 15 }: SpinnerProps) {
	return (
		<SpinnerContainer className="lds-ellipsis" $color={color} $size={size}>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
		</SpinnerContainer>
	);
}

export default Spinner;
