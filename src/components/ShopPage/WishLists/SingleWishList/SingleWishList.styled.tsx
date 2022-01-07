import styled from 'styled-components';
import { FlexColumnDiv, FlexRowDiv, BeforePseudoDivider } from '../../../../GlobalStyles.styled';

export const SingleWishListContainer = styled(FlexColumnDiv)`
	width: 100%;
	border: 1px solid #8a8a8abc;
	margin: 0.5rem 0;
	border-top-left-radius: 0.3rem;
	border-top-right-radius: 0.3rem;
	box-shadow: 1px 1px 1px #8a8a8abc;
`;

export const WishListHeader = styled(FlexRowDiv)`
	width: 100%;
	border-bottom: 1px solid #8a8a8abc;
	padding: 0.5rem;
	justify-content: space-between;
	align-items: end;
`;

export const HeaderTitleArea = styled(FlexColumnDiv)``;

export const WishListTitle = styled.span`
	font-weight: bold;
	margin-bottom: 0.2rem;
`;

export const WishListDate = styled.span`
	font-size: 12px;
`;

export const ProductsContainer = styled(FlexColumnDiv)`
	width: 100%;
`;

export const WishListFooter = styled(FlexRowDiv)`
	width: 100%;
	padding: 0.5rem;
	font-size: 12px;
`;

export const FooterDataItem = styled.span`
	/* the footer item divider */
	&:not(:first-child) {
		${BeforePseudoDivider}
	}
`;

export const DataItemLabel = styled.span<{ $isValue?: boolean }>`
	font-weight: ${props => (props.$isValue ? 'bold' : '')};
	margin-inline-start: ${props => (props.$isValue ? '0.2rem' : '')};
`;
