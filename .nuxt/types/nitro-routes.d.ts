// Generated by nitro
import type { Serialize, Simplify } from "nitropack/types";
declare module "nitropack/types" {
  type Awaited<T> = T extends PromiseLike<infer U> ? Awaited<U> : T
  interface InternalApi {
    '/api/fetch-css': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../server/api/fetch-css').default>>>>
    }
    '/api/kubus': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../server/api/kubus').default>>>>
    }
    '/api/linear': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../server/api/linear').default>>>>
    }
    '/api/m-9000': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../server/api/m-9000').default>>>>
    }
    '/api/m-eco': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../server/api/m-eco').default>>>>
    }
    '/api/m-oc': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../server/api/m-oc').default>>>>
    }
    '/api/sitemap': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../server/api/sitemap').default>>>>
    }
    '/__nuxt_error': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../node_modules/nuxt/dist/core/runtime/nitro/renderer').default>>>>
    }
    '/__site-config__/debug.json': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../node_modules/nuxt-site-config/dist/runtime/nitro/routes/__site-config__/debug').default>>>>
    }
    '/__sitemap__/debug.json': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../node_modules/@nuxtjs/sitemap/dist/runtime/nitro/routes/__sitemap__/debug').default>>>>
    }
    '/__sitemap__/style.xsl': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../node_modules/@nuxtjs/sitemap/dist/runtime/nitro/routes/sitemap.xsl').default>>>>
    }
    '/sitemap.xml': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../node_modules/@nuxtjs/sitemap/dist/runtime/nitro/routes/sitemap.xml').default>>>>
    }
    '/mail/send': {
      'post': Simplify<Serialize<Awaited<ReturnType<typeof import('../../node_modules/nuxt-mail/dist/server-handler.post').default>>>>
    }
    '/_ipx/**': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../node_modules/@nuxt/image/dist/runtime/ipx').default>>>>
    }
  }
}
export {}