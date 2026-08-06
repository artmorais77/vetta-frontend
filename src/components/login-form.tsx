import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { GalleryVerticalEndIcon } from 'lucide-react';

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<'div'>) {
  return (
    <div className={cn('flex flex-col gap-6', className)} {...props}>
      <form>
        <FieldGroup>
          <div className="flex flex-col items-center gap-2 text-center">
            <a
              href="#"
              className="flex flex-col items-center gap-2 font-medium"
            >
              <div className="flex size-8 items-center justify-center rounded-md">
                <GalleryVerticalEndIcon className="size-6" />
              </div>
              <span className="sr-only">Vetta.</span>
            </a>
            <h1 className="text-xl font-bold">Bem vindo a Vetta.</h1>
            <FieldDescription>
              Não tem uma conta? <a href="#">Inscrever-se</a>
            </FieldDescription>
          </div>
          <Field>
            <FieldLabel htmlFor="email">Email</FieldLabel>
            <Input
              id="email"
              type="email"
              placeholder="m@example.com"
              required
            />
          </Field>
          <Field>
            <FieldLabel htmlFor="password">Senha</FieldLabel>
            <Input
              id="password"
              type="password"
              placeholder="********"
              required
            />
          </Field>
          <Field>
            <Button type="submit">Login</Button>
          </Field>
        </FieldGroup>
      </form>
      <FieldDescription className="px-6 text-center">
        Ao clicar em continuar, você concorda com nossos{' '}
        <a href="#">Termos de Serviço</a> e{' '}
        <a href="#">Política de Privacidade</a>.
      </FieldDescription>
    </div>
  );
}
