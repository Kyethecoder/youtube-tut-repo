import SanityClient from '@sanity/client';
import ImageUrlBuilder from '@sanity/image-url';

export const client = SanityClient({
  projectId: 'exiz0rgv',
  dataset: 'production',
  apiVersion: '2022-09-01',
  useCdn: true,
  token:
    'skT82oCId91vDPWOQoLVx6qVxX3mLxGYzSQeX0tsRRS2KGDFtmWXuIRxz0yyz3RyErMeUHraDpTDTLbWgjoiLcnh4GoL3CChOcNpkGFzQeywcAR73yQiqnxjBlL3Z435QgzTZJEEZJnI7O0R4RdQaCivBTKKIBV79efdtavbNvcfx9iSB2nS',
});

const builder = ImageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
