import { createParamDecorator, ExecutionContext } from "@nestjs/common";

export const ClerkUserId = createParamDecorator((_: unknown, ctx: ExecutionContext) => {
  const req = ctx.switchToHttp().getRequest();

  return req.auth?.userId as string | undefined;
});
