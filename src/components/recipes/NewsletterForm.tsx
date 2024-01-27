import styled from 'styled-components';
import Input from '../common/Input';
import Button from '../common/Button';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

const StyledNewsletterForm = styled.form`
  grid-area: newsletter;
  display: flex;
  flex-direction: column;
  gap: 14px;

  color: var(--color-white);

  @media screen and (min-width: 1440px) {
    justify-self: end;
    flex-direction: column;
    width: 338px;
  }
`;

const NewsletterContainer = styled.div`
  display: grid;
  gap: 0.5rem;

  @media screen and (min-width: 768px) {
    grid-template-columns: 1.4fr 1fr;
  }

  @media screen and (min-width: 1440px) {
    grid-template-columns: 1fr;
    width: 338px;
    gap: 0.8em;
  }
`;

const NewsletterHeader = styled.h4`
  font-weight: 600;
  display: none;
  font-size: 1.28rem;

  @media screen and (min-width: 1440px) {
    display: block;
  }
`;

const NewsletterDescription = styled.p`
  display: none;
  line-height: 1.28;
  font-weight: 300;
  letter-spacing: -0.28px;
  margin-bottom: 0.4em;

  @media screen and (min-width: 1440px) {
    display: block;
  }
`;

const NewsletterForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm({
    mode: 'all',
    defaultValues: {
      email: '',
    },
  });

  const handleNewsletterSubmit = () => {
    toast.success('You have successfully subscribed to our newsletter!');

    reset();
  };

  return (
    <StyledNewsletterForm
      onSubmit={handleSubmit(handleNewsletterSubmit)}
      autoComplete="off">
      <NewsletterHeader>Subscribe to out Newsletter</NewsletterHeader>
      <NewsletterDescription>
        Subscribe up to our newsletter. Be in touch with latest news and special
        offers, etc.
      </NewsletterDescription>

      <NewsletterContainer>
        <Input
          variant="Newsletter"
          sizee="stretch"
          {...register('email', {
            pattern: {
              value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
              message: 'Email is invalid',
            },
            required: 'Email is required',
          })}
          error={errors?.email}
        />
        <Button type="submit" stretch={true} size="primary" disabled={!isValid}>
          Subscribe
        </Button>
      </NewsletterContainer>
    </StyledNewsletterForm>
  );
};

export default NewsletterForm;
