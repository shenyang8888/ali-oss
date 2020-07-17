import { copy } from './copy';

export async function putMeta(this: any, name, meta, options: any = {}) {

  const copyResult = await copy.call(this, name, name, {
    meta: meta || {},
    timeout: options && options.timeout,
    ctx: options && options.ctx
  });
  return copyResult;
}
