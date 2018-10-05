import styled from 'react-emotion';
import asAnchor from './asAnchor';

const asLogoAnchor = (AnchorType) => {
  const Anchor = asAnchor(AnchorType);

  const StyledLogoAnchor = styled(Anchor)({
    fontSize: '30px',
    lineHeight: '30px',
    fontWeight: '700',
  });
  return StyledLogoAnchor;
};

export default asLogoAnchor;
