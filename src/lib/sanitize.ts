const SCRIPT_TAG_PATTERN = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi
const EVENT_HANDLER_PATTERN = /\s+on[a-z]+\s*=\s*(?:"[^"]*"|'[^']*'|[^\s>]+)/gi
const UNSAFE_URL_PATTERN =
  /\s+(href|src)\s*=\s*(["'])\s*(?:javascript|data):[^"']*\2/gi

export function sanitizeRichTextHTML(html: string | null | undefined) {
  if (!html) {
    return ''
  }

  return html
    .replace(SCRIPT_TAG_PATTERN, '')
    .replace(EVENT_HANDLER_PATTERN, '')
    .replace(UNSAFE_URL_PATTERN, '')
}
