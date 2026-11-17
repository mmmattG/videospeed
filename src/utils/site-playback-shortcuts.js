const NETFLIX_BINDINGS = Object.freeze({
  KeyJ: Object.freeze({ action: 'rewind', value: 10, exclusive: true }),
  KeyK: Object.freeze({ action: 'pause', value: 0, exclusive: true }),
  KeyL: Object.freeze({ action: 'advance', value: 10, exclusive: true }),
});

const NATIVE_BINDINGS = Object.freeze({});

function matchesDomain(hostname, domain) {
  return hostname === domain || hostname.endsWith(`.${domain}`);
}

// An empty map reserves J/K/L for the site's player; null uses the user's bindings.
export function getSitePlaybackBindings(hostname) {
  if (matchesDomain(hostname, 'netflix.com')) {
    return NETFLIX_BINDINGS;
  }
  if (matchesDomain(hostname, 'youtube.com') || matchesDomain(hostname, 'youtube-nocookie.com')) {
    return NATIVE_BINDINGS;
  }
  return null;
}
