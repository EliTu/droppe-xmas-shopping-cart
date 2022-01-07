import styled from 'styled-components';

const ToggleIndicator = styled.span.attrs<{ isOpen: boolean; toggleTargetLabel: string }>(
	({ isOpen, toggleTargetLabel }) => ({
		children: isOpen ? `Hide ${toggleTargetLabel}` : `Show ${toggleTargetLabel}`,
	})
)<{ isOpen: boolean; toggleTargetLabel: string }>`
	color: navy;
	cursor: pointer;

	&:hover {
		color: dodgerblue;
	}
`;

export default ToggleIndicator;
