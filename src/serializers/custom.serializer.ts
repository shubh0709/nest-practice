import { UseInterceptors, ClassSerializerInterceptor } from '@nestjs/common';

export function customSerializer() {}

export function customInterceptor() {
  // runs before url hits or receivng request

  return () => {
    // runs at the time of sending response
  };
}
