import path from 'path';
import hasha from 'hasha';
import fs from 'fs-extra';
import jsYaml from 'js-yaml';

jest.setTimeout(60 * 1000); // in milliseconds

describe('Check to ensure the files are generated with the correct file names:', () => {
  const paths = [
    ['test-build/srcASYNC2/srcASYNC2_1.0.1.yml', '98126fb769c131825c94d0b1774228a8'],
    ['test-build/builtOA2_std/builtOA2_std_1.0.1.yml', '2d52db00ddf873bd7fe421dddf52ca35'],
    ['test-build/builtOA2_readonly/builtOA2_readonly_1.0.1.yml', '87baaf9f9974424c944b2e5a1a906579'],
    ['test-build/builtOA2_no_version/builtOA2_no_version.yml', '2d52db00ddf873bd7fe421dddf52ca35'],
    ['test-build/builtOA3_std/builtOA3_1.0.1.yml', '30d02452f886b1941483fba11c983953'],
    ['test-build/builtOA3_exclude/builtOA3.yml', '30d02452f886b1941483fba11c983953'],
    ['test-build/builtOA2_inject/api_1.0.1.yml', 'd0ab7c79d21bc103337438c3d1bddaed'],
  ];

  it('Check all files have been created', (done) => {
    for (let i = 0; i < paths.length; ++i) {
      const filePath = paths[i][0];
      if (!fs.pathExistsSync(filePath)) {
        done('Not found filePath: ' + filePath);
      }
    }
    done();
  });

  it('built srcASYNC2_1.0.1.yml', async () => {
    const itemToTest: any = jsYaml.safeLoad(fs.readFileSync('test-build/srcASYNC2/srcASYNC2_1.0.1.yml', 'utf8'));
    expect(itemToTest.asyncapi).toBe('2.0.0');
    expect(itemToTest.info.title).toBe('boats');
    expect(itemToTest.info.version).toBe('1.0.1');
    expect(itemToTest.info.description).toBe(
      'Beautiful Open / Async Template System - Write less yaml with BOATS and Nunjucks.'
    );
    expect(itemToTest.info.license.name).toBe('Apache 2.0');
    expect(itemToTest.info.license.url).toBe('https://www.apache.org/licenses/LICENSE-2.0');
    expect(itemToTest.defaultContentType).toBe('application/json');
    expect(itemToTest.channels['/ms-auth/cache-connection'].description).toBe(
      'When a new connection change occurs the new cache values are emitted in the payload'
    );
    expect(itemToTest.channels['/ms-auth/cache-connection'].publish.operationId).toBe('msAuthCacheConnectionPublish');
    expect(itemToTest.channels['/ms-auth/cache-connection'].publish.message.contentType).toBe('application/json');
    expect(itemToTest.channels['/ms-auth/cache-connection'].publish.message.payload.$ref).toBe(
      '#/components/schemas/MsAuthCacheConnection'
    );
    expect(itemToTest.channels['/ms-auth/cache-connection'].subscribe.operationId).toBe(
      'msAuthCacheConnectionSubscribe'
    );
    expect(itemToTest.channels['/ms-auth/cache-connection'].subscribe.message.contentType).toBe('application/json');
    expect(itemToTest.channels['/ms-auth/cache-connection'].subscribe.message.payload.$ref).toBe(
      '#/components/schemas/MsAuthCacheConnection'
    );
    expect(itemToTest.channels['/ms-auth/cache-user'].description).toBe(
      'When a new connection change occurs the new cache values are emitted in the payload'
    );
    expect(itemToTest.channels['/ms-auth/cache-user'].publish.operationId).toBe('msAuthCacheUserPublish');
    expect(itemToTest.channels['/ms-auth/cache-user'].publish.message.contentType).toBe('application/json');
    expect(itemToTest.channels['/ms-auth/cache-user'].publish.message.payload.$ref).toBe(
      '#/components/schemas/MsAuthCacheUser'
    );
    expect(itemToTest.channels['/ms-auth/cache-user'].subscribe.operationId).toBe('msAuthCacheUserSubscribe');
    expect(itemToTest.channels['/ms-auth/cache-user'].subscribe.message.contentType).toBe('application/json');
    expect(itemToTest.channels['/ms-auth/cache-user'].subscribe.message.payload.$ref).toBe(
      '#/components/schemas/MsAuthCacheUser'
    );
    expect(itemToTest.components.schemas.MsAuthCacheConnection.type).toBe('object');
    expect(itemToTest.components.schemas.MsAuthCacheConnection.properties.username.type).toBe('string');
    expect(itemToTest.components.schemas.MsAuthCacheConnection.properties.connections.type).toBe('array');
    expect(itemToTest.components.schemas.MsAuthCacheConnection.properties.connections.items.type).toBe('object');
    expect(
      itemToTest.components.schemas.MsAuthCacheConnection.properties.connections.items.properties.updated.type
    ).toBe('string');
    expect(
      itemToTest.components.schemas.MsAuthCacheConnection.properties.connections.items.properties.updated.format
    ).toBe('date');
    expect(itemToTest.components.schemas.MsAuthCacheConnection.properties.connections.items.properties.state.type).toBe(
      'string'
    );
    expect(
      itemToTest.components.schemas.MsAuthCacheConnection.properties.connections.items.properties.username.type
    ).toBe('string');
    expect(itemToTest.components.schemas.MsAuthCacheUser.type).toBe('object');
    expect(itemToTest.components.schemas.MsAuthCacheUser.properties.username.type).toBe('string');
    expect(itemToTest.components.schemas.MsAuthCacheUser.properties.email.type).toBe('string');
  });

  it('built builtOA2_std_1.0.1.yml', async () => {
    const itemToTest: any = jsYaml.safeLoad(fs.readFileSync('test-build/builtOA2_std/builtOA2_std_1.0.1.yml', 'utf8'));
    expect(itemToTest.swagger).toBe('2.0');
    expect(itemToTest.info.version).toBe('1.0.1');
    expect(itemToTest.info.title).toBe('boats');
    expect(itemToTest.info.description).toBe('A sample API');
    expect(itemToTest.info.contact.name).toBe('Swagger API Team');
    expect(itemToTest.info.contact.email).toBe('john@boats.io');
    expect(itemToTest.info.contact.url).toBe('https://github.com/johndcarmichael/boats/');
    expect(itemToTest.info.license.name).toBe('Apache 2.0');
    expect(itemToTest.info.license.url).toBe('https://www.apache.org/licenses/LICENSE-2.0.html');
    expect(itemToTest.schemes[0]).toBe('https');
    expect(itemToTest.host).toBe('api.example.com');
    expect(itemToTest.basePath).toBe('/v1');
    expect(itemToTest.securityDefinitions.jwtToken.type).toBe('apiKey');
    expect(itemToTest.securityDefinitions.jwtToken.in).toBe('header');
    expect(itemToTest.securityDefinitions.jwtToken.name).toBe('authorization');
    expect(itemToTest.securityDefinitions.apiKey.type).toBe('apiKey');
    expect(itemToTest.securityDefinitions.apiKey.in).toBe('header');
    expect(itemToTest.securityDefinitions.apiKey.name).toBe('x-api-key');
    expect(itemToTest.paths['/v1/star-wars/'].get.tags[0]).toBe('starWars');
    expect(itemToTest.paths['/v1/star-wars/'].get.summary).toBe('get star wars details');
    expect(itemToTest.paths['/v1/star-wars/'].get.description).toBe('get star wars details');
    expect(itemToTest.paths['/v1/star-wars/'].get.operationId).toBe('v1StarWarsGet');
    expect(itemToTest.paths['/v1/star-wars/'].get.responses[200].description).toBe('Successful fetch');
    expect(itemToTest.paths['/v1/star-wars/'].get.responses[200].schema.$ref).toBe('#/definitions/StarWars');
    expect(itemToTest.paths['/v1/star-wars/'].get.responses[404].description).toBe(
      'Path & method combination not found'
    );
    expect(itemToTest.paths['/v1/star-wars/'].get.parameters[0].$ref).toBe('#/parameters/HeaderSearchId');
    expect(itemToTest.paths['/weather'].get.tags[0]).toBe('weather');
    expect(itemToTest.paths['/weather'].get.summary).toBe('weather search');
    expect(itemToTest.paths['/weather'].get.description).toBe('Search for weather objects');
    expect(itemToTest.paths['/weather'].get.operationId).toBe('v1WeatherGet');
    expect(itemToTest.paths['/weather'].get['x-filename']).toBe('get');
    expect(itemToTest.paths['/weather'].get.parameters[0].$ref).toBe('#/parameters/QueryOffset');
    expect(itemToTest.paths['/weather'].get.parameters[1].$ref).toBe('#/parameters/QueryTextSearch');
    expect(itemToTest.paths['/weather'].get.parameters[2].$ref).toBe('#/parameters/HeaderSearchId');
    expect(itemToTest.paths['/weather'].get.responses[200].description).toBe('Successful fetch');
    expect(itemToTest.paths['/weather'].get.responses[200].schema.properties.meta.$ref).toBe(
      '#/definitions/GenericSearchMeta'
    );
    expect(itemToTest.paths['/weather'].get.responses[200].schema.properties.data.type).toBe('array');
    expect(itemToTest.paths['/weather'].get.responses[200].schema.properties.data.items.$ref).toBe(
      '#/definitions/WeatherModel'
    );
    expect(itemToTest.paths['/weather'].get.responses[404].description).toBe('Path & method combination not found');
    expect(itemToTest.paths['/weather'].post.tags[0]).toBe('weather');
    expect(itemToTest.paths['/weather'].post.summary).toBe('weather data');
    expect(itemToTest.paths['/weather'].post.description).toBe('Create a new weather record.');
    expect(itemToTest.paths['/weather'].post.operationId).toBe('v1WeatherPost');
    expect(itemToTest.paths['/weather'].post.parameters[0].in).toBe('body');
    expect(itemToTest.paths['/weather'].post.parameters[0].name).toBe('v1WeatherPost');
    expect(itemToTest.paths['/weather'].post.parameters[0].description).toBe('Optional description in *Markdown*');
    expect(itemToTest.paths['/weather'].post.parameters[0].required).toBe(true);
    expect(itemToTest.paths['/weather'].post.parameters[0].schema.$ref).toBe('#/definitions/WeatherPost');
    expect(itemToTest.paths['/weather'].post.parameters[1].$ref).toBe('#/parameters/HeaderSearchId');
    expect(itemToTest.paths['/weather'].post.responses[200].description).toBe('Successful temp creation');
    expect(itemToTest.paths['/weather'].post.responses[200].schema.$ref).toBe('#/definitions/WeatherModel');
    expect(itemToTest.paths['/weather'].post.responses[404].description).toBe('Path & method combination not found');
    expect(itemToTest.paths['/weather'].post.responses[422].description).toBe('Invalid form data provided');
    expect(itemToTest.paths['/weather'].post['x-permission']).toBe('createV1Weather');
    expect(itemToTest.paths['/weather/id/{id}'].get.tags[0]).toBe('weather');
    expect(itemToTest.paths['/weather/id/{id}'].get.summary).toBe('One weather object');
    expect(itemToTest.paths['/weather/id/{id}'].get.description).toBe('Get the full weather object');
    expect(itemToTest.paths['/weather/id/{id}'].get.operationId).toBe('v1WeatherIdGet');
    expect(itemToTest.paths['/weather/id/{id}'].get.produces[0]).toBe('application/json');
    expect(itemToTest.paths['/weather/id/{id}'].get.parameters[0].$ref).toBe('#/parameters/PathId');
    expect(itemToTest.paths['/weather/id/{id}'].get.parameters[1].$ref).toBe('#/parameters/HeaderSearchId');
    expect(itemToTest.paths['/weather/id/{id}'].get.responses[200].description).toBe('Successful fetch');
    expect(itemToTest.paths['/weather/id/{id}'].get.responses[200].schema.$ref).toBe('#/definitions/WeatherModel');
    expect(itemToTest.paths['/weather/id/{id}'].get.responses[404].description).toBe(
      'Path & method combination not found'
    );
    expect(itemToTest.paths['/weather/id/{id}'].delete.tags[0]).toBe('weather');
    expect(itemToTest.paths['/weather/id/{id}'].delete.summary).toBe('weather set to rain');
    expect(itemToTest.paths['/weather/id/{id}'].delete.description).toBe(
      'Reset awful sunny weather to excellent rainy weather'
    );
    expect(itemToTest.paths['/weather/id/{id}'].delete.operationId).toBe('v1WeatherIdDelete');
    expect(itemToTest.paths['/weather/id/{id}'].delete['x-filename']).toBe('delete');
    expect(itemToTest.paths['/weather/id/{id}'].delete.parameters[0].$ref).toBe('#/parameters/PathId');
    expect(itemToTest.paths['/weather/id/{id}'].delete.parameters[1].$ref).toBe('#/parameters/QueryOffset');
    expect(itemToTest.paths['/weather/id/{id}'].delete.parameters[2].$ref).toBe('#/parameters/QueryTextSearch');
    expect(itemToTest.paths['/weather/id/{id}'].delete.parameters[3].in).toBe('query');
    expect(itemToTest.paths['/weather/id/{id}'].delete.parameters[3].name).toBe('areYouSure');
    expect(itemToTest.paths['/weather/id/{id}'].delete.parameters[3].required).toBe(true);
    expect(itemToTest.paths['/weather/id/{id}'].delete.parameters[3].type).toBe('string');
    expect(itemToTest.paths['/weather/id/{id}'].delete.parameters[4].in).toBe('query');
    expect(itemToTest.paths['/weather/id/{id}'].delete.parameters[4].name).toBe('areYouSureSure');
    expect(itemToTest.paths['/weather/id/{id}'].delete.parameters[4].required).toBe(true);
    expect(itemToTest.paths['/weather/id/{id}'].delete.parameters[4].type).toBe('string');
    expect(itemToTest.paths['/weather/id/{id}'].delete.parameters[5].$ref).toBe('#/parameters/HeaderSearchId');
    expect(itemToTest.paths['/weather/id/{id}'].delete.responses[200].description).toBe('Deleted');
    expect(itemToTest.paths['/weather/id/{id}'].delete.responses[404].description).toBe(
      'Path & method combination not found'
    );
    expect(itemToTest.paths['/weather/id/{id}'].put.tags[0]).toBe('weather');
    expect(itemToTest.paths['/weather/id/{id}'].put.summary).toBe('weather data');
    expect(itemToTest.paths['/weather/id/{id}'].put.description).toBe('Create a new weather record.');
    expect(itemToTest.paths['/weather/id/{id}'].put.operationId).toBe('v1WeatherIdPut');
    expect(itemToTest.paths['/weather/id/{id}'].put.produces[0]).toBe('application/json');
    expect(itemToTest.paths['/weather/id/{id}'].put.parameters[0].$ref).toBe('#/parameters/PathId');
    expect(itemToTest.paths['/weather/id/{id}'].put.parameters[1].in).toBe('body');
    expect(itemToTest.paths['/weather/id/{id}'].put.parameters[1].name).toBe('v1WeatherIdPut');
    expect(itemToTest.paths['/weather/id/{id}'].put.parameters[1].description).toBe(
      'Optional description in *Markdown*'
    );
    expect(itemToTest.paths['/weather/id/{id}'].put.parameters[1].required).toBe(true);
    expect(itemToTest.paths['/weather/id/{id}'].put.parameters[1].schema.$ref).toBe('#/definitions/WeatherIdPut');
    expect(itemToTest.paths['/weather/id/{id}'].put.parameters[2].$ref).toBe('#/parameters/HeaderSearchId');
    expect(itemToTest.paths['/weather/id/{id}'].put.responses[200].description).toBe('Successful temp creation');
    expect(itemToTest.paths['/weather/id/{id}'].put.responses[200].schema.$ref).toBe('#/definitions/WeatherModel');
    expect(itemToTest.paths['/weather/id/{id}'].put.responses[404].description).toBe(
      'Path & method combination not found'
    );
    expect(itemToTest.paths['/weather/id/{id}'].put.responses[422].description).toBe('Invalid form data provided');
    expect(itemToTest.paths['/weather/id/{id}/pattern'].get.tags[0]).toBe('weather');
    expect(itemToTest.paths['/weather/id/{id}/pattern'].get.summary).toBe('One weather object');
    expect(itemToTest.paths['/weather/id/{id}/pattern'].get.description).toBe('Get the full weather object');
    expect(itemToTest.paths['/weather/id/{id}/pattern'].get.operationId).toBe('v1WeatherIdPatternGet');
    expect(itemToTest.paths['/weather/id/{id}/pattern'].get.produces[0]).toBe('application/json');
    expect(itemToTest.paths['/weather/id/{id}/pattern'].get.parameters[0].$ref).toBe('#/parameters/PathId');
    expect(itemToTest.paths['/weather/id/{id}/pattern'].get.parameters[1].$ref).toBe('#/parameters/HeaderSearchId');
    expect(itemToTest.paths['/weather/id/{id}/pattern'].get.responses[200].description).toBe('Successful fetch');
    expect(itemToTest.paths['/weather/id/{id}/pattern'].get.responses[200].schema.$ref).toBe(
      '#/definitions/WeatherModel'
    );
    expect(itemToTest.paths['/weather/id/{id}/pattern'].get.responses[404].description).toBe(
      'Path & method combination not found'
    );
    expect(itemToTest.paths['/weather/latest'].get.tags[0]).toBe('weather');
    expect(itemToTest.paths['/weather/latest'].get.summary).toBe('lastest weather data');
    expect(itemToTest.paths['/weather/latest'].get.description).toBe('Get the latest temperatures');
    expect(itemToTest.paths['/weather/latest'].get.operationId).toBe('v1WeatherLatestGet');
    expect(itemToTest.paths['/weather/latest'].get.produces[0]).toBe('application/json');
    expect(itemToTest.paths['/weather/latest'].get.responses[200].description).toBe('Successful fetch');
    expect(itemToTest.paths['/weather/latest'].get.responses[200].schema.$ref).toBe('#/definitions/WeatherModels');
    expect(itemToTest.paths['/weather/latest'].get.responses[404].description).toBe('Temp not found');
    expect(itemToTest.parameters.HeaderSearchId.in).toBe('header');
    expect(itemToTest.parameters.HeaderSearchId.name).toBe('Search-Id');
    expect(itemToTest.parameters.HeaderSearchId.type).toBe('string');
    expect(itemToTest.parameters.HeaderSearchId.description).toBe('Unique search {id}');
    expect(itemToTest.parameters.HeaderSearchId['x-example']).toBe('569eecd9-9962-4aed-a0f0-30476c6a82ed');
    expect(itemToTest.parameters.PathId.in).toBe('path');
    expect(itemToTest.parameters.PathId.name).toBe('id');
    expect(itemToTest.parameters.PathId.type).toBe('integer');
    expect(itemToTest.parameters.PathId.required).toBe(true);
    expect(itemToTest.parameters.PathId.description).toBe('Numeric ID of object to fetch');
    expect(itemToTest.parameters.QueryOffset.in).toBe('query');
    expect(itemToTest.parameters.QueryOffset.name).toBe('offset');
    expect(itemToTest.parameters.QueryOffset.required).toBe(false);
    expect(itemToTest.parameters.QueryOffset.type).toBe('integer');
    expect(itemToTest.parameters.QueryOffset.description).toBe(
      'The number of items to skip before starting to collect the result set.'
    );
    expect(itemToTest.parameters.QueryTextSearch.in).toBe('query');
    expect(itemToTest.parameters.QueryTextSearch.name).toBe('textSearch');
    expect(itemToTest.parameters.QueryTextSearch.required).toBe(false);
    expect(itemToTest.parameters.QueryTextSearch.type).toBe('string');
    expect(itemToTest.parameters.QueryTextSearch.description).toBe('Search string to query');
    expect(itemToTest.definitions.GenericSearchMeta.properties.totalResultCount.type).toBe('number');
    expect(itemToTest.definitions.GenericSearchMeta.properties.offset.type).toBe('number');
    expect(itemToTest.definitions.GenericSearchMeta.properties.limit.type).toBe('number');
    expect(itemToTest.definitions.StarWars.type).toBe('object');
    expect(itemToTest.definitions.StarWars.properties.empireName.type).toBe('string');
    expect(itemToTest.definitions.StarWars.properties.rebellious.type).toBe('boolean');
    expect(itemToTest.definitions.StarWars.properties.darthVader.type).toBe('boolean');
    expect(itemToTest.definitions.WeatherIdPut.allOf[0].$ref).toBe('#/definitions/WeatherPost');
    expect(itemToTest.definitions.WeatherIdPut.allOf[1].type).toBe('object');
    expect(itemToTest.definitions.WeatherIdPut.allOf[1].properties.id.type).toBe('integer');
    expect(itemToTest.definitions.WeatherModel.type).toBe('object');
    expect(itemToTest.definitions.WeatherModel.properties.id.type).toBe('integer');
    expect(itemToTest.definitions.WeatherModel.properties.date.type).toBe('string');
    expect(itemToTest.definitions.WeatherModel.properties.date.format).toBe('date');
    expect(itemToTest.definitions.WeatherModel.properties.location.type).toBe('string');
    expect(itemToTest.definitions.WeatherModel.properties.cloudCoverPercentage.type).toBe('integer');
    expect(itemToTest.definitions.WeatherModel.properties.humidityPercentage.type).toBe('integer');
    expect(itemToTest.definitions.WeatherModel.properties.temperature.type).toBe('number');
    expect(itemToTest.definitions.WeatherModels.type).toBe('array');
    expect(itemToTest.definitions.WeatherModels.items.$ref).toBe('#/definitions/WeatherModel');
    expect(itemToTest.definitions.WeatherPost.type).toBe('object');
    expect(itemToTest.definitions.WeatherPost.properties.date.type).toBe('string');
    expect(itemToTest.definitions.WeatherPost.properties.date.format).toBe('date');
    expect(itemToTest.definitions.WeatherPost.properties.location.type).toBe('string');
    expect(itemToTest.definitions.WeatherPost.properties.cloudCoverPercentage.type).toBe('integer');
    expect(itemToTest.definitions.WeatherPost.properties.humidityPercentage.type).toBe('integer');
  });

  it('built builtOA2_readonly_1.0.1.yml', async () => {
    const itemToTest: any = jsYaml.safeLoad(
      fs.readFileSync('test-build/builtOA2_readonly/builtOA2_readonly_1.0.1.yml', 'utf8')
    );
    expect(itemToTest.swagger).toBe('2.0');
    expect(itemToTest.info.version).toBe('1.0.1');
    expect(itemToTest.info.title).toBe('boats');
    expect(itemToTest.info.description).toBe('A sample API');
    expect(itemToTest.info.contact.name).toBe('Swagger API Team');
    expect(itemToTest.info.contact.email).toBe('john@boats.io');
    expect(itemToTest.info.contact.url).toBe('https://github.com/johndcarmichael/boats/');
    expect(itemToTest.info.license.name).toBe('Apache 2.0');
    expect(itemToTest.info.license.url).toBe('https://www.apache.org/licenses/LICENSE-2.0.html');
    expect(itemToTest.host).toBe('api.example.com');
    expect(itemToTest.basePath).toBe('/v1');
    expect(itemToTest.schemes[0]).toBe('https');
    expect(itemToTest.paths['/v1/star-wars/'].get.tags[0]).toBe('starWars');
    expect(itemToTest.paths['/v1/star-wars/'].get.summary).toBe('get star wars details');
    expect(itemToTest.paths['/v1/star-wars/'].get.description).toBe('get star wars details');
    expect(itemToTest.paths['/v1/star-wars/'].get.operationId).toBe('v1StarWarsGet');
    expect(itemToTest.paths['/v1/star-wars/'].get.responses[200].description).toBe('Successful fetch');
    expect(itemToTest.paths['/v1/star-wars/'].get.responses[200].schema.$ref).toBe('#/definitions/StarWars');
    expect(itemToTest.paths['/v1/star-wars/'].get.responses[404].description).toBe(
      'Path & method combination not found'
    );
    expect(itemToTest.paths['/weather'].get.tags[0]).toBe('weather');
    expect(itemToTest.paths['/weather'].get.summary).toBe('weather search');
    expect(itemToTest.paths['/weather'].get.description).toBe('Search for weather objects');
    expect(itemToTest.paths['/weather'].get.operationId).toBe('v1WeatherGet');
    expect(itemToTest.paths['/weather'].get['x-filename']).toBe('get');
    expect(itemToTest.paths['/weather'].get.parameters[0].$ref).toBe('#/parameters/QueryOffset');
    expect(itemToTest.paths['/weather'].get.parameters[1].$ref).toBe('#/parameters/QueryTextSearch');
    expect(itemToTest.paths['/weather'].get.responses[200].description).toBe('Successful fetch');
    expect(itemToTest.paths['/weather'].get.responses[200].schema.properties.meta.$ref).toBe(
      '#/definitions/GenericSearchMeta'
    );
    expect(itemToTest.paths['/weather'].get.responses[200].schema.properties.data.type).toBe('array');
    expect(itemToTest.paths['/weather'].get.responses[200].schema.properties.data.items.$ref).toBe(
      '#/definitions/WeatherModel'
    );
    expect(itemToTest.paths['/weather'].get.responses[404].description).toBe('Path & method combination not found');
    expect(itemToTest.paths['/weather/id/{id}'].get.tags[0]).toBe('weather');
    expect(itemToTest.paths['/weather/id/{id}'].get.summary).toBe('One weather object');
    expect(itemToTest.paths['/weather/id/{id}'].get.description).toBe('Get the full weather object');
    expect(itemToTest.paths['/weather/id/{id}'].get.operationId).toBe('v1WeatherIdGet');
    expect(itemToTest.paths['/weather/id/{id}'].get.produces[0]).toBe('application/json');
    expect(itemToTest.paths['/weather/id/{id}'].get.parameters[0].$ref).toBe('#/parameters/PathId');
    expect(itemToTest.paths['/weather/id/{id}'].get.responses[200].description).toBe('Successful fetch');
    expect(itemToTest.paths['/weather/id/{id}'].get.responses[200].schema.$ref).toBe('#/definitions/WeatherModel');
    expect(itemToTest.paths['/weather/id/{id}'].get.responses[404].description).toBe(
      'Path & method combination not found'
    );
    expect(itemToTest.paths['/weather/id/{id}'].delete.tags[0]).toBe('weather');
    expect(itemToTest.paths['/weather/id/{id}'].delete.summary).toBe('weather set to rain');
    expect(itemToTest.paths['/weather/id/{id}'].delete.description).toBe(
      'Reset awful sunny weather to excellent rainy weather'
    );
    expect(itemToTest.paths['/weather/id/{id}'].delete.operationId).toBe('v1WeatherIdDelete');
    expect(itemToTest.paths['/weather/id/{id}'].delete['x-filename']).toBe('delete');
    expect(itemToTest.paths['/weather/id/{id}'].delete.parameters[0].$ref).toBe('#/parameters/PathId');
    expect(itemToTest.paths['/weather/id/{id}'].delete.parameters[1].$ref).toBe('#/parameters/QueryOffset');
    expect(itemToTest.paths['/weather/id/{id}'].delete.parameters[2].$ref).toBe('#/parameters/QueryTextSearch');
    expect(itemToTest.paths['/weather/id/{id}'].delete.parameters[3].in).toBe('query');
    expect(itemToTest.paths['/weather/id/{id}'].delete.parameters[3].name).toBe('areYouSure');
    expect(itemToTest.paths['/weather/id/{id}'].delete.parameters[3].required).toBe(true);
    expect(itemToTest.paths['/weather/id/{id}'].delete.parameters[3].type).toBe('string');
    expect(itemToTest.paths['/weather/id/{id}'].delete.parameters[4].in).toBe('query');
    expect(itemToTest.paths['/weather/id/{id}'].delete.parameters[4].name).toBe('areYouSureSure');
    expect(itemToTest.paths['/weather/id/{id}'].delete.parameters[4].required).toBe(true);
    expect(itemToTest.paths['/weather/id/{id}'].delete.parameters[4].type).toBe('string');
    expect(itemToTest.paths['/weather/id/{id}'].delete.responses[200].description).toBe('Deleted');
    expect(itemToTest.paths['/weather/id/{id}'].delete.responses[404].description).toBe('Temp not found');
    expect(itemToTest.paths['/weather/id/{id}/pattern'].get.tags[0]).toBe('weather');
    expect(itemToTest.paths['/weather/id/{id}/pattern'].get.summary).toBe('One weather object');
    expect(itemToTest.paths['/weather/id/{id}/pattern'].get.description).toBe('Get the full weather object');
    expect(itemToTest.paths['/weather/id/{id}/pattern'].get.operationId).toBe('v1WeatherIdPatternGet');
    expect(itemToTest.paths['/weather/id/{id}/pattern'].get.produces[0]).toBe('application/json');
    expect(itemToTest.paths['/weather/id/{id}/pattern'].get.parameters[0].$ref).toBe('#/parameters/PathId');
    expect(itemToTest.paths['/weather/id/{id}/pattern'].get.responses[200].description).toBe('Successful fetch');
    expect(itemToTest.paths['/weather/id/{id}/pattern'].get.responses[200].schema.$ref).toBe(
      '#/definitions/WeatherModel'
    );
    expect(itemToTest.paths['/weather/id/{id}/pattern'].get.responses[404].description).toBe(
      'Path & method combination not found'
    );
    expect(itemToTest.paths['/weather/latest'].get.tags[0]).toBe('weather');
    expect(itemToTest.paths['/weather/latest'].get.summary).toBe('lastest weather data');
    expect(itemToTest.paths['/weather/latest'].get.description).toBe('Get the latest temperatures');
    expect(itemToTest.paths['/weather/latest'].get.operationId).toBe('v1WeatherLatestGet');
    expect(itemToTest.paths['/weather/latest'].get.produces[0]).toBe('application/json');
    expect(itemToTest.paths['/weather/latest'].get.responses[200].description).toBe('Successful fetch');
    expect(itemToTest.paths['/weather/latest'].get.responses[200].schema.$ref).toBe('#/definitions/WeatherModels');
    expect(itemToTest.paths['/weather/latest'].get.responses[404].description).toBe('Temp not found');
    expect(itemToTest.parameters.HeaderSearchId.in).toBe('header');
    expect(itemToTest.parameters.HeaderSearchId.name).toBe('Search-Id');
    expect(itemToTest.parameters.HeaderSearchId.type).toBe('string');
    expect(itemToTest.parameters.HeaderSearchId.description).toBe('Unique search {id}');
    expect(itemToTest.parameters.HeaderSearchId['x-example']).toBe('569eecd9-9962-4aed-a0f0-30476c6a82ed');
    expect(itemToTest.parameters.PathId.in).toBe('path');
    expect(itemToTest.parameters.PathId.name).toBe('id');
    expect(itemToTest.parameters.PathId.type).toBe('integer');
    expect(itemToTest.parameters.PathId.required).toBe(true);
    expect(itemToTest.parameters.PathId.description).toBe('Numeric ID of object to fetch');
    expect(itemToTest.parameters.QueryOffset.in).toBe('query');
    expect(itemToTest.parameters.QueryOffset.name).toBe('offset');
    expect(itemToTest.parameters.QueryOffset.required).toBe(false);
    expect(itemToTest.parameters.QueryOffset.type).toBe('integer');
    expect(itemToTest.parameters.QueryOffset.description).toBe(
      'The number of items to skip before starting to collect the result set.'
    );
    expect(itemToTest.parameters.QueryTextSearch.in).toBe('query');
    expect(itemToTest.parameters.QueryTextSearch.name).toBe('textSearch');
    expect(itemToTest.parameters.QueryTextSearch.required).toBe(false);
    expect(itemToTest.parameters.QueryTextSearch.type).toBe('string');
    expect(itemToTest.parameters.QueryTextSearch.description).toBe('Search string to query');
    expect(itemToTest.definitions.GenericSearchMeta.properties.totalResultCount.type).toBe('number');
    expect(itemToTest.definitions.GenericSearchMeta.properties.offset.type).toBe('number');
    expect(itemToTest.definitions.GenericSearchMeta.properties.limit.type).toBe('number');
    expect(itemToTest.definitions.StarWars.type).toBe('object');
    expect(itemToTest.definitions.StarWars.properties.empireName.type).toBe('string');
    expect(itemToTest.definitions.StarWars.properties.rebellious.type).toBe('boolean');
    expect(itemToTest.definitions.StarWars.properties.darthVader.type).toBe('boolean');
    expect(itemToTest.definitions.WeatherIdPut.allOf[0].$ref).toBe('#/definitions/WeatherPost');
    expect(itemToTest.definitions.WeatherIdPut.allOf[1].type).toBe('object');
    expect(itemToTest.definitions.WeatherIdPut.allOf[1].properties.id.type).toBe('integer');
    expect(itemToTest.definitions.WeatherModel.type).toBe('object');
    expect(itemToTest.definitions.WeatherModel.properties.id.type).toBe('integer');
    expect(itemToTest.definitions.WeatherModel.properties.date.type).toBe('string');
    expect(itemToTest.definitions.WeatherModel.properties.date.format).toBe('date');
    expect(itemToTest.definitions.WeatherModel.properties.location.type).toBe('string');
    expect(itemToTest.definitions.WeatherModel.properties.cloudCoverPercentage.type).toBe('integer');
    expect(itemToTest.definitions.WeatherModel.properties.humidityPercentage.type).toBe('integer');
    expect(itemToTest.definitions.WeatherModel.properties.temperature.type).toBe('number');
    expect(itemToTest.definitions.WeatherModels.type).toBe('array');
    expect(itemToTest.definitions.WeatherModels.items.$ref).toBe('#/definitions/WeatherModel');
    expect(itemToTest.definitions.WeatherPost.type).toBe('object');
    expect(itemToTest.definitions.WeatherPost.properties.date.type).toBe('string');
    expect(itemToTest.definitions.WeatherPost.properties.date.format).toBe('date');
    expect(itemToTest.definitions.WeatherPost.properties.location.type).toBe('string');
    expect(itemToTest.definitions.WeatherPost.properties.cloudCoverPercentage.type).toBe('integer');
    expect(itemToTest.definitions.WeatherPost.properties.humidityPercentage.type).toBe('integer');
    expect(itemToTest.definitions.WeatherPost.properties.temperature.type).toBe('number');
  });

  it('built builtOA2_no_version.yml', async () => {
    const itemToTest: any = jsYaml.safeLoad(
      fs.readFileSync('test-build/builtOA2_no_version/builtOA2_no_version.yml', 'utf8')
    );
    expect(itemToTest.swagger).toBe('2.0');
    expect(itemToTest.info.version).toBe('1.0.1');
    expect(itemToTest.info.title).toBe('boats');
    expect(itemToTest.info.description).toBe('A sample API');
    expect(itemToTest.info.contact.name).toBe('Swagger API Team');
    expect(itemToTest.info.contact.email).toBe('john@boats.io');
    expect(itemToTest.info.contact.url).toBe('https://github.com/johndcarmichael/boats/');
    expect(itemToTest.info.license.name).toBe('Apache 2.0');
    expect(itemToTest.info.license.url).toBe('https://www.apache.org/licenses/LICENSE-2.0.html');
    expect(itemToTest.schemes[0]).toBe('https');
    expect(itemToTest.host).toBe('api.example.com');
    expect(itemToTest.basePath).toBe('/v1');
    expect(itemToTest.securityDefinitions.jwtToken.type).toBe('apiKey');
    expect(itemToTest.securityDefinitions.jwtToken.in).toBe('header');
    expect(itemToTest.securityDefinitions.jwtToken.name).toBe('authorization');
    expect(itemToTest.securityDefinitions.apiKey.type).toBe('apiKey');
    expect(itemToTest.securityDefinitions.apiKey.in).toBe('header');
    expect(itemToTest.securityDefinitions.apiKey.name).toBe('x-api-key');
    expect(itemToTest.paths['/v1/star-wars/'].get.tags[0]).toBe('starWars');
    expect(itemToTest.paths['/v1/star-wars/'].get.summary).toBe('get star wars details');
    expect(itemToTest.paths['/v1/star-wars/'].get.description).toBe('get star wars details');
    expect(itemToTest.paths['/v1/star-wars/'].get.operationId).toBe('v1StarWarsGet');
    expect(itemToTest.paths['/v1/star-wars/'].get.responses[200].description).toBe('Successful fetch');
    expect(itemToTest.paths['/v1/star-wars/'].get.responses[200].schema.$ref).toBe('#/definitions/StarWars');
    expect(itemToTest.paths['/v1/star-wars/'].get.responses[404].description).toBe(
      'Path & method combination not found'
    );
    expect(itemToTest.paths['/v1/star-wars/'].get.parameters[0].$ref).toBe('#/parameters/HeaderSearchId');
    expect(itemToTest.paths['/weather'].get.tags[0]).toBe('weather');
    expect(itemToTest.paths['/weather'].get.summary).toBe('weather search');
    expect(itemToTest.paths['/weather'].get.description).toBe('Search for weather objects');
    expect(itemToTest.paths['/weather'].get.operationId).toBe('v1WeatherGet');
    expect(itemToTest.paths['/weather'].get['x-filename']).toBe('get');
    expect(itemToTest.paths['/weather'].get.parameters[0].$ref).toBe('#/parameters/QueryOffset');
    expect(itemToTest.paths['/weather'].get.parameters[1].$ref).toBe('#/parameters/QueryTextSearch');
    expect(itemToTest.paths['/weather'].get.parameters[2].$ref).toBe('#/parameters/HeaderSearchId');
    expect(itemToTest.paths['/weather'].get.responses[200].description).toBe('Successful fetch');
    expect(itemToTest.paths['/weather'].get.responses[200].schema.properties.meta.$ref).toBe(
      '#/definitions/GenericSearchMeta'
    );
    expect(itemToTest.paths['/weather'].get.responses[200].schema.properties.data.type).toBe('array');
    expect(itemToTest.paths['/weather'].get.responses[200].schema.properties.data.items.$ref).toBe(
      '#/definitions/WeatherModel'
    );
    expect(itemToTest.paths['/weather'].get.responses[404].description).toBe('Path & method combination not found');
    expect(itemToTest.paths['/weather'].post.tags[0]).toBe('weather');
    expect(itemToTest.paths['/weather'].post.summary).toBe('weather data');
    expect(itemToTest.paths['/weather'].post.description).toBe('Create a new weather record.');
    expect(itemToTest.paths['/weather'].post.operationId).toBe('v1WeatherPost');
    expect(itemToTest.paths['/weather'].post.parameters[0].in).toBe('body');
    expect(itemToTest.paths['/weather'].post.parameters[0].name).toBe('v1WeatherPost');
    expect(itemToTest.paths['/weather'].post.parameters[0].description).toBe('Optional description in *Markdown*');
    expect(itemToTest.paths['/weather'].post.parameters[0].required).toBe(true);
    expect(itemToTest.paths['/weather'].post.parameters[0].schema.$ref).toBe('#/definitions/WeatherPost');
    expect(itemToTest.paths['/weather'].post.parameters[1].$ref).toBe('#/parameters/HeaderSearchId');
    expect(itemToTest.paths['/weather'].post.responses[200].description).toBe('Successful temp creation');
    expect(itemToTest.paths['/weather'].post.responses[200].schema.$ref).toBe('#/definitions/WeatherModel');
    expect(itemToTest.paths['/weather'].post.responses[404].description).toBe('Path & method combination not found');
    expect(itemToTest.paths['/weather'].post.responses[422].description).toBe('Invalid form data provided');
    expect(itemToTest.paths['/weather'].post['x-permission']).toBe('createV1Weather');
    expect(itemToTest.paths['/weather/id/{id}'].get.tags[0]).toBe('weather');
    expect(itemToTest.paths['/weather/id/{id}'].get.summary).toBe('One weather object');
    expect(itemToTest.paths['/weather/id/{id}'].get.description).toBe('Get the full weather object');
    expect(itemToTest.paths['/weather/id/{id}'].get.operationId).toBe('v1WeatherIdGet');
    expect(itemToTest.paths['/weather/id/{id}'].get.produces[0]).toBe('application/json');
    expect(itemToTest.paths['/weather/id/{id}'].get.parameters[0].$ref).toBe('#/parameters/PathId');
    expect(itemToTest.paths['/weather/id/{id}'].get.parameters[1].$ref).toBe('#/parameters/HeaderSearchId');
    expect(itemToTest.paths['/weather/id/{id}'].get.responses[200].description).toBe('Successful fetch');
    expect(itemToTest.paths['/weather/id/{id}'].get.responses[200].schema.$ref).toBe('#/definitions/WeatherModel');
    expect(itemToTest.paths['/weather/id/{id}'].get.responses[404].description).toBe(
      'Path & method combination not found'
    );
    expect(itemToTest.paths['/weather/id/{id}'].delete.tags[0]).toBe('weather');
    expect(itemToTest.paths['/weather/id/{id}'].delete.summary).toBe('weather set to rain');
    expect(itemToTest.paths['/weather/id/{id}'].delete.description).toBe(
      'Reset awful sunny weather to excellent rainy weather'
    );
    expect(itemToTest.paths['/weather/id/{id}'].delete.operationId).toBe('v1WeatherIdDelete');
    expect(itemToTest.paths['/weather/id/{id}'].delete['x-filename']).toBe('delete');
    expect(itemToTest.paths['/weather/id/{id}'].delete.parameters[0].$ref).toBe('#/parameters/PathId');
    expect(itemToTest.paths['/weather/id/{id}'].delete.parameters[1].$ref).toBe('#/parameters/QueryOffset');
    expect(itemToTest.paths['/weather/id/{id}'].delete.parameters[2].$ref).toBe('#/parameters/QueryTextSearch');
    expect(itemToTest.paths['/weather/id/{id}'].delete.parameters[3].in).toBe('query');
    expect(itemToTest.paths['/weather/id/{id}'].delete.parameters[3].name).toBe('areYouSure');
    expect(itemToTest.paths['/weather/id/{id}'].delete.parameters[3].required).toBe(true);
    expect(itemToTest.paths['/weather/id/{id}'].delete.parameters[3].type).toBe('string');
    expect(itemToTest.paths['/weather/id/{id}'].delete.parameters[4].in).toBe('query');
    expect(itemToTest.paths['/weather/id/{id}'].delete.parameters[4].name).toBe('areYouSureSure');
    expect(itemToTest.paths['/weather/id/{id}'].delete.parameters[4].required).toBe(true);
    expect(itemToTest.paths['/weather/id/{id}'].delete.parameters[4].type).toBe('string');
    expect(itemToTest.paths['/weather/id/{id}'].delete.parameters[5].$ref).toBe('#/parameters/HeaderSearchId');
    expect(itemToTest.paths['/weather/id/{id}'].delete.responses[200].description).toBe('Deleted');
    expect(itemToTest.paths['/weather/id/{id}'].delete.responses[404].description).toBe(
      'Path & method combination not found'
    );
    expect(itemToTest.paths['/weather/id/{id}'].put.tags[0]).toBe('weather');
    expect(itemToTest.paths['/weather/id/{id}'].put.summary).toBe('weather data');
    expect(itemToTest.paths['/weather/id/{id}'].put.description).toBe('Create a new weather record.');
    expect(itemToTest.paths['/weather/id/{id}'].put.operationId).toBe('v1WeatherIdPut');
    expect(itemToTest.paths['/weather/id/{id}'].put.produces[0]).toBe('application/json');
    expect(itemToTest.paths['/weather/id/{id}'].put.parameters[0].$ref).toBe('#/parameters/PathId');
    expect(itemToTest.paths['/weather/id/{id}'].put.parameters[1].in).toBe('body');
    expect(itemToTest.paths['/weather/id/{id}'].put.parameters[1].name).toBe('v1WeatherIdPut');
    expect(itemToTest.paths['/weather/id/{id}'].put.parameters[1].description).toBe(
      'Optional description in *Markdown*'
    );
    expect(itemToTest.paths['/weather/id/{id}'].put.parameters[1].required).toBe(true);
    expect(itemToTest.paths['/weather/id/{id}'].put.parameters[1].schema.$ref).toBe('#/definitions/WeatherIdPut');
    expect(itemToTest.paths['/weather/id/{id}'].put.parameters[2].$ref).toBe('#/parameters/HeaderSearchId');
    expect(itemToTest.paths['/weather/id/{id}'].put.responses[200].description).toBe('Successful temp creation');
    expect(itemToTest.paths['/weather/id/{id}'].put.responses[200].schema.$ref).toBe('#/definitions/WeatherModel');
    expect(itemToTest.paths['/weather/id/{id}'].put.responses[404].description).toBe(
      'Path & method combination not found'
    );
    expect(itemToTest.paths['/weather/id/{id}'].put.responses[422].description).toBe('Invalid form data provided');
    expect(itemToTest.paths['/weather/id/{id}/pattern'].get.tags[0]).toBe('weather');
    expect(itemToTest.paths['/weather/id/{id}/pattern'].get.summary).toBe('One weather object');
    expect(itemToTest.paths['/weather/id/{id}/pattern'].get.description).toBe('Get the full weather object');
    expect(itemToTest.paths['/weather/id/{id}/pattern'].get.operationId).toBe('v1WeatherIdPatternGet');
    expect(itemToTest.paths['/weather/id/{id}/pattern'].get.produces[0]).toBe('application/json');
    expect(itemToTest.paths['/weather/id/{id}/pattern'].get.parameters[0].$ref).toBe('#/parameters/PathId');
    expect(itemToTest.paths['/weather/id/{id}/pattern'].get.parameters[1].$ref).toBe('#/parameters/HeaderSearchId');
    expect(itemToTest.paths['/weather/id/{id}/pattern'].get.responses[200].description).toBe('Successful fetch');
    expect(itemToTest.paths['/weather/id/{id}/pattern'].get.responses[200].schema.$ref).toBe(
      '#/definitions/WeatherModel'
    );
    expect(itemToTest.paths['/weather/id/{id}/pattern'].get.responses[404].description).toBe(
      'Path & method combination not found'
    );
    expect(itemToTest.paths['/weather/latest'].get.tags[0]).toBe('weather');
    expect(itemToTest.paths['/weather/latest'].get.summary).toBe('lastest weather data');
    expect(itemToTest.paths['/weather/latest'].get.description).toBe('Get the latest temperatures');
    expect(itemToTest.paths['/weather/latest'].get.operationId).toBe('v1WeatherLatestGet');
    expect(itemToTest.paths['/weather/latest'].get.produces[0]).toBe('application/json');
    expect(itemToTest.paths['/weather/latest'].get.responses[200].description).toBe('Successful fetch');
    expect(itemToTest.paths['/weather/latest'].get.responses[200].schema.$ref).toBe('#/definitions/WeatherModels');
    expect(itemToTest.paths['/weather/latest'].get.responses[404].description).toBe('Temp not found');
    expect(itemToTest.parameters.HeaderSearchId.in).toBe('header');
    expect(itemToTest.parameters.HeaderSearchId.name).toBe('Search-Id');
    expect(itemToTest.parameters.HeaderSearchId.type).toBe('string');
    expect(itemToTest.parameters.HeaderSearchId.description).toBe('Unique search {id}');
    expect(itemToTest.parameters.HeaderSearchId['x-example']).toBe('569eecd9-9962-4aed-a0f0-30476c6a82ed');
    expect(itemToTest.parameters.PathId.in).toBe('path');
    expect(itemToTest.parameters.PathId.name).toBe('id');
    expect(itemToTest.parameters.PathId.type).toBe('integer');
    expect(itemToTest.parameters.PathId.required).toBe(true);
    expect(itemToTest.parameters.PathId.description).toBe('Numeric ID of object to fetch');
    expect(itemToTest.parameters.QueryOffset.in).toBe('query');
    expect(itemToTest.parameters.QueryOffset.name).toBe('offset');
    expect(itemToTest.parameters.QueryOffset.required).toBe(false);
    expect(itemToTest.parameters.QueryOffset.type).toBe('integer');
    expect(itemToTest.parameters.QueryOffset.description).toBe(
      'The number of items to skip before starting to collect the result set.'
    );
    expect(itemToTest.parameters.QueryTextSearch.in).toBe('query');
    expect(itemToTest.parameters.QueryTextSearch.name).toBe('textSearch');
    expect(itemToTest.parameters.QueryTextSearch.required).toBe(false);
    expect(itemToTest.parameters.QueryTextSearch.type).toBe('string');
    expect(itemToTest.parameters.QueryTextSearch.description).toBe('Search string to query');
    expect(itemToTest.definitions.GenericSearchMeta.properties.totalResultCount.type).toBe('number');
    expect(itemToTest.definitions.GenericSearchMeta.properties.offset.type).toBe('number');
    expect(itemToTest.definitions.GenericSearchMeta.properties.limit.type).toBe('number');
    expect(itemToTest.definitions.StarWars.type).toBe('object');
    expect(itemToTest.definitions.StarWars.properties.empireName.type).toBe('string');
    expect(itemToTest.definitions.StarWars.properties.rebellious.type).toBe('boolean');
    expect(itemToTest.definitions.StarWars.properties.darthVader.type).toBe('boolean');
    expect(itemToTest.definitions.WeatherIdPut.allOf[0].$ref).toBe('#/definitions/WeatherPost');
    expect(itemToTest.definitions.WeatherIdPut.allOf[1].type).toBe('object');
    expect(itemToTest.definitions.WeatherIdPut.allOf[1].properties.id.type).toBe('integer');
    expect(itemToTest.definitions.WeatherModel.type).toBe('object');
    expect(itemToTest.definitions.WeatherModel.properties.id.type).toBe('integer');
    expect(itemToTest.definitions.WeatherModel.properties.date.type).toBe('string');
    expect(itemToTest.definitions.WeatherModel.properties.date.format).toBe('date');
    expect(itemToTest.definitions.WeatherModel.properties.location.type).toBe('string');
    expect(itemToTest.definitions.WeatherModel.properties.cloudCoverPercentage.type).toBe('integer');
    expect(itemToTest.definitions.WeatherModel.properties.humidityPercentage.type).toBe('integer');
    expect(itemToTest.definitions.WeatherModel.properties.temperature.type).toBe('number');
    expect(itemToTest.definitions.WeatherModels.type).toBe('array');
    expect(itemToTest.definitions.WeatherModels.items.$ref).toBe('#/definitions/WeatherModel');
    expect(itemToTest.definitions.WeatherPost.type).toBe('object');
    expect(itemToTest.definitions.WeatherPost.properties.date.type).toBe('string');
    expect(itemToTest.definitions.WeatherPost.properties.date.format).toBe('date');
    expect(itemToTest.definitions.WeatherPost.properties.location.type).toBe('string');
    expect(itemToTest.definitions.WeatherPost.properties.cloudCoverPercentage.type).toBe('integer');
    expect(itemToTest.definitions.WeatherPost.properties.humidityPercentage.type).toBe('integer');
    expect(itemToTest.definitions.WeatherPost.properties.temperature.type).toBe('number');
  });

  it('built builtOA3_1.0.1.yml', async () => {
    const infile: any = jsYaml.safeLoad(fs.readFileSync('test-build/builtOA3_std/builtOA3_1.0.1.yml', 'utf8'));
    expect(infile.openapi).toBe('3.0.0');
    expect(infile.info.version).toBe('1.0.1');
    expect(infile.info.title).toBe('boats');
    expect(infile.info.description).toBe('A sample API');
    expect(infile.info.contact.name).toBe('Swagger API Team');
    expect(infile.info.contact.email).toBe('john@boats.io');
    expect(infile.info.contact.url).toBe('https://github.com/johndcarmichael/boats/');
    expect(infile.info.license.name).toBe('Apache 2.0');
    expect(infile.info.license.url).toBe('https://www.apache.org/licenses/LICENSE-2.0.html');
    expect(infile.servers[0].url).toBe('localhost');
    expect(infile.tags[0].name).toBe('weather');
    expect(infile.tags[0].description).toBe('Weather data');
    expect(infile.paths['/weather'].get.tags[0]).toBe('Weather');
    expect(infile.paths['/weather'].get.summary).toBe('weather data');
    expect(infile.paths['/weather'].get.description).toBe('Get the latest temperatures');
    expect(infile.paths['/weather'].get.operationId).toBe('weatherGet');
    expect(infile.paths['/weather'].get.responses[200].description).toBe('Successful fetch');
    expect(infile.paths['/weather'].get.responses[200].content['application/json'].schema.$ref).toBe(
      '#/components/schemas/Weathers'
    );
    expect(infile.paths['/weather'].get.responses[404].description).toBe('Temp not found');
    expect(infile.paths['/weather'].post.tags[0]).toBe('Weather');
    expect(infile.paths['/weather'].post.summary).toBe('weather data');
    expect(infile.paths['/weather'].post.description).toBe('Create a new weather record.');
    expect(infile.paths['/weather'].post.operationId).toBe('weatherPost');
    expect(infile.paths['/weather'].post.requestBody.description).toBe('Optional description in *Markdown*');
    expect(infile.paths['/weather'].post.requestBody.required).toBe(true);
    expect(infile.paths['/weather'].post.requestBody.content['application/json'].schema.$ref).toBe(
      '#/components/schemas/WeatherPost'
    );
    expect(infile.paths['/weather'].post.responses[200].description).toBe('Successful temp creation');
    expect(infile.paths['/weather'].post.responses[200].content['application/json'].schema.$ref).toBe(
      '#/components/schemas/Weather'
    );
    expect(infile.paths['/weather'].post.responses[422].description).toBe('Invalid form data provided');
    expect(infile.paths['/weather/id/{id}'].get.tags[0]).toBe('Weather');
    expect(infile.paths['/weather/id/{id}'].get.summary).toBe('weather data');
    expect(infile.paths['/weather/id/{id}'].get.description).toBe('Get the latest temperatures');
    expect(infile.paths['/weather/id/{id}'].get.operationId).toBe('weatherIdIdGet');
    expect(infile.paths['/weather/id/{id}'].get.parameters[0].$ref).toBe('#/components/parameters/PathId');
    expect(infile.paths['/weather/id/{id}'].get.responses[200].description).toBe('Successful fetch');
    expect(infile.paths['/weather/id/{id}'].get.responses[200].content['application/json'].schema.$ref).toBe(
      '#/components/schemas/Weather'
    );
    expect(infile.paths['/weather/id/{id}'].get.responses[404].description).toBe('Temp not found');
    expect(infile.paths['/weather/id/{id}'].put.tags[0]).toBe('Weather');
    expect(infile.paths['/weather/id/{id}'].put.summary).toBe('weather data');
    expect(infile.paths['/weather/id/{id}'].put.description).toBe('Create a new weather record.');
    expect(infile.paths['/weather/id/{id}'].put.operationId).toBe('weatherIdIdPut');
    expect(infile.paths['/weather/id/{id}'].put.requestBody.description).toBe('Optional description in *Markdown*');
    expect(infile.paths['/weather/id/{id}'].put.requestBody.required).toBe(true);
    expect(infile.paths['/weather/id/{id}'].put.requestBody.content['application/json'].schema.$ref).toBe(
      '#/components/schemas/WeatherPut'
    );
    expect(infile.paths['/weather/id/{id}'].put.responses[200].description).toBe('Successful temp creation');
    expect(infile.paths['/weather/id/{id}'].put.responses[200].content['application/json'].schema.$ref).toBe(
      '#/components/schemas/Weather'
    );
    expect(infile.paths['/weather/id/{id}'].put.responses[422].description).toBe('Invalid form data provided');
    expect(infile.components.parameters.PathId.in).toBe('path');
    expect(infile.components.parameters.PathId.name).toBe('id');
    expect(infile.components.parameters.PathId.schema.type).toBe('integer');
    expect(infile.components.parameters.PathId.required).toBe(true);
    expect(infile.components.parameters.PathId.description).toBe('Numeric ID of object to fetch');
    expect(infile.components.parameters.QueryOffset.in).toBe('query');
    expect(infile.components.parameters.QueryOffset.name).toBe('offset');
    expect(infile.components.parameters.QueryOffset.required).toBe(false);
    expect(infile.components.parameters.QueryOffset.schema.type).toBe('integer');
    expect(infile.components.parameters.QueryOffset.schema.minimum).toBe(0);
    expect(infile.components.parameters.QueryOffset.description).toBe(
      'The number of items to skip before starting to collect the result set.'
    );
    expect(infile.components.schemas.GenericSearchMeta.properties.totalResultCount.type).toBe('number');
    expect(infile.components.schemas.GenericSearchMeta.properties.offset.type).toBe('number');
    expect(infile.components.schemas.GenericSearchMeta.properties.limit.type).toBe('number');
    expect(infile.components.schemas.Weather.type).toBe('object');
    expect(infile.components.schemas.Weather.properties.id.type).toBe('integer');
    expect(infile.components.schemas.Weather.properties.date.type).toBe('string');
    expect(infile.components.schemas.Weather.properties.date.format).toBe('date');
    expect(infile.components.schemas.Weather.properties.location.type).toBe('string');
    expect(infile.components.schemas.Weather.properties.cloudCoverPercentage.type).toBe('integer');
    expect(infile.components.schemas.Weather.properties.humidityPercentage.type).toBe('integer');
    expect(infile.components.schemas.Weather.properties.temperature.type).toBe('number');
    expect(infile.components.schemas.Weathers.type).toBe('object');
    expect(infile.components.schemas.Weathers.properties.meta.$ref).toBe('#/components/schemas/GenericSearchMeta');
    expect(infile.components.schemas.Weathers.properties.data.type).toBe('array');
    expect(infile.components.schemas.Weathers.properties.data.items.$ref).toBe('#/components/schemas/Weather');
    expect(infile.components.schemas.WeatherPost.type).toBe('object');
    expect(infile.components.schemas.WeatherPost.properties.date.type).toBe('string');
    expect(infile.components.schemas.WeatherPost.properties.date.format).toBe('date');
    expect(infile.components.schemas.WeatherPost.properties.location.type).toBe('string');
    expect(infile.components.schemas.WeatherPost.properties.cloudCoverPercentage.type).toBe('integer');
    expect(infile.components.schemas.WeatherPost.properties.humidityPercentage.type).toBe('integer');
    expect(infile.components.schemas.WeatherPost.properties.temperature.type).toBe('number');
    expect(infile.components.schemas.WeatherPut.allOf[0].$ref).toBe('#/components/schemas/WeatherPost');
    expect(infile.components.schemas.WeatherPut.allOf[1].type).toBe('object');
    expect(infile.components.schemas.WeatherPut.allOf[1].properties.id.type).toBe('integer');
  });

  it('built builtOA3.yml', async () => {
    const infile: any = jsYaml.safeLoad(fs.readFileSync('test-build/builtOA3_exclude/builtOA3.yml', 'utf8'));
    expect(infile.openapi).toBe('3.0.0');
    expect(infile.info.version).toBe('1.0.1');
    expect(infile.info.title).toBe('boats');
    expect(infile.info.description).toBe('A sample API');
    expect(infile.info.contact.name).toBe('Swagger API Team');
    expect(infile.info.contact.email).toBe('john@boats.io');
    expect(infile.info.contact.url).toBe('https://github.com/johndcarmichael/boats/');
    expect(infile.info.license.name).toBe('Apache 2.0');
    expect(infile.info.license.url).toBe('https://www.apache.org/licenses/LICENSE-2.0.html');
    expect(infile.servers[0].url).toBe('localhost');
    expect(infile.tags[0].name).toBe('weather');
    expect(infile.tags[0].description).toBe('Weather data');
    expect(infile.paths['/weather'].get.tags[0]).toBe('Weather');
    expect(infile.paths['/weather'].get.summary).toBe('weather data');
    expect(infile.paths['/weather'].get.description).toBe('Get the latest temperatures');
    expect(infile.paths['/weather'].get.operationId).toBe('weatherGet');
    expect(infile.paths['/weather'].get.responses[200].description).toBe('Successful fetch');
    expect(infile.paths['/weather'].get.responses[200].content['application/json'].schema.$ref).toBe(
      '#/components/schemas/Weathers'
    );
    expect(infile.paths['/weather'].get.responses[404].description).toBe('Temp not found');
    expect(infile.paths['/weather'].post.tags[0]).toBe('Weather');
    expect(infile.paths['/weather'].post.summary).toBe('weather data');
    expect(infile.paths['/weather'].post.description).toBe('Create a new weather record.');
    expect(infile.paths['/weather'].post.operationId).toBe('weatherPost');
    expect(infile.paths['/weather'].post.requestBody.description).toBe('Optional description in *Markdown*');
    expect(infile.paths['/weather'].post.requestBody.required).toBe(true);
    expect(infile.paths['/weather'].post.requestBody.content['application/json'].schema.$ref).toBe(
      '#/components/schemas/WeatherPost'
    );
    expect(infile.paths['/weather'].post.responses[200].description).toBe('Successful temp creation');
    expect(infile.paths['/weather'].post.responses[200].content['application/json'].schema.$ref).toBe(
      '#/components/schemas/Weather'
    );
    expect(infile.paths['/weather'].post.responses[422].description).toBe('Invalid form data provided');
    expect(infile.paths['/weather/id/{id}'].get.tags[0]).toBe('Weather');
    expect(infile.paths['/weather/id/{id}'].get.summary).toBe('weather data');
    expect(infile.paths['/weather/id/{id}'].get.description).toBe('Get the latest temperatures');
    expect(infile.paths['/weather/id/{id}'].get.operationId).toBe('weatherIdIdGet');
    expect(infile.paths['/weather/id/{id}'].get.parameters[0].$ref).toBe('#/components/parameters/PathId');
    expect(infile.paths['/weather/id/{id}'].get.responses[200].description).toBe('Successful fetch');
    expect(infile.paths['/weather/id/{id}'].get.responses[200].content['application/json'].schema.$ref).toBe(
      '#/components/schemas/Weather'
    );
    expect(infile.paths['/weather/id/{id}'].get.responses[404].description).toBe('Temp not found');
    expect(infile.paths['/weather/id/{id}'].put.tags[0]).toBe('Weather');
    expect(infile.paths['/weather/id/{id}'].put.summary).toBe('weather data');
    expect(infile.paths['/weather/id/{id}'].put.description).toBe('Create a new weather record.');
    expect(infile.paths['/weather/id/{id}'].put.operationId).toBe('weatherIdIdPut');
    expect(infile.paths['/weather/id/{id}'].put.requestBody.description).toBe('Optional description in *Markdown*');
    expect(infile.paths['/weather/id/{id}'].put.requestBody.required).toBe(true);
    expect(infile.paths['/weather/id/{id}'].put.requestBody.content['application/json'].schema.$ref).toBe(
      '#/components/schemas/WeatherPut'
    );
    expect(infile.paths['/weather/id/{id}'].put.responses[200].description).toBe('Successful temp creation');
    expect(infile.paths['/weather/id/{id}'].put.responses[200].content['application/json'].schema.$ref).toBe(
      '#/components/schemas/Weather'
    );
    expect(infile.paths['/weather/id/{id}'].put.responses[422].description).toBe('Invalid form data provided');
    expect(infile.components.parameters.PathId.in).toBe('path');
    expect(infile.components.parameters.PathId.name).toBe('id');
    expect(infile.components.parameters.PathId.schema.type).toBe('integer');
    expect(infile.components.parameters.PathId.required).toBe(true);
    expect(infile.components.parameters.PathId.description).toBe('Numeric ID of object to fetch');
    expect(infile.components.parameters.QueryOffset.in).toBe('query');
    expect(infile.components.parameters.QueryOffset.name).toBe('offset');
    expect(infile.components.parameters.QueryOffset.required).toBe(false);
    expect(infile.components.parameters.QueryOffset.schema.type).toBe('integer');
    expect(infile.components.parameters.QueryOffset.schema.minimum).toBe(0);
    expect(infile.components.parameters.QueryOffset.description).toBe(
      'The number of items to skip before starting to collect the result set.'
    );
    expect(infile.components.schemas.GenericSearchMeta.properties.totalResultCount.type).toBe('number');
    expect(infile.components.schemas.GenericSearchMeta.properties.offset.type).toBe('number');
    expect(infile.components.schemas.GenericSearchMeta.properties.limit.type).toBe('number');
    expect(infile.components.schemas.Weather.type).toBe('object');
    expect(infile.components.schemas.Weather.properties.id.type).toBe('integer');
    expect(infile.components.schemas.Weather.properties.date.type).toBe('string');
    expect(infile.components.schemas.Weather.properties.date.format).toBe('date');
    expect(infile.components.schemas.Weather.properties.location.type).toBe('string');
    expect(infile.components.schemas.Weather.properties.cloudCoverPercentage.type).toBe('integer');
    expect(infile.components.schemas.Weather.properties.humidityPercentage.type).toBe('integer');
    expect(infile.components.schemas.Weather.properties.temperature.type).toBe('number');
    expect(infile.components.schemas.Weathers.type).toBe('object');
    expect(infile.components.schemas.Weathers.properties.meta.$ref).toBe('#/components/schemas/GenericSearchMeta');
    expect(infile.components.schemas.Weathers.properties.data.type).toBe('array');
    expect(infile.components.schemas.Weathers.properties.data.items.$ref).toBe('#/components/schemas/Weather');
    expect(infile.components.schemas.WeatherPost.type).toBe('object');
    expect(infile.components.schemas.WeatherPost.properties.date.type).toBe('string');
    expect(infile.components.schemas.WeatherPost.properties.date.format).toBe('date');
    expect(infile.components.schemas.WeatherPost.properties.location.type).toBe('string');
    expect(infile.components.schemas.WeatherPost.properties.cloudCoverPercentage.type).toBe('integer');
    expect(infile.components.schemas.WeatherPost.properties.humidityPercentage.type).toBe('integer');
    expect(infile.components.schemas.WeatherPost.properties.temperature.type).toBe('number');
    expect(infile.components.schemas.WeatherPut.allOf[0].$ref).toBe('#/components/schemas/WeatherPost');
    expect(infile.components.schemas.WeatherPut.allOf[1].type).toBe('object');
    expect(infile.components.schemas.WeatherPut.allOf[1].properties.id.type).toBe('integer');
  });

  it('built test-build/builtOA2_inject/api_1.0.1.yml', async () => {
    const itemToTest: any = jsYaml.safeLoad(fs.readFileSync('test-build/builtOA2_inject/api_1.0.1.yml', 'utf8'));
    expect(itemToTest.swagger).toBe('2.0');
    expect(itemToTest.info.version).toBe('1.0.1');
    expect(itemToTest.info.title).toBe('boats');
    expect(itemToTest.info.description).toBe('A sample API');
    expect(itemToTest.info.contact.name).toBe('Swagger API Team');
    expect(itemToTest.info.contact.email).toBe('john@boats.io');
    expect(itemToTest.info.contact.url).toBe('https://github.com/johndcarmichael/boats/');
    expect(itemToTest.info.license.name).toBe('Apache 2.0');
    expect(itemToTest.info.license.url).toBe('https://www.apache.org/licenses/LICENSE-2.0.html');
    expect(itemToTest.schemes[0]).toBe('https');
    expect(itemToTest.host).toBe('api.example.com');
    expect(itemToTest.basePath).toBe('/v1');
    expect(itemToTest.securityDefinitions.jwtToken.type).toBe('apiKey');
    expect(itemToTest.securityDefinitions.jwtToken.in).toBe('header');
    expect(itemToTest.securityDefinitions.jwtToken.name).toBe('authorization');
    expect(itemToTest.securityDefinitions.apiKey.type).toBe('apiKey');
    expect(itemToTest.securityDefinitions.apiKey.in).toBe('header');
    expect(itemToTest.securityDefinitions.apiKey.name).toBe('x-api-key');
    expect(itemToTest.paths['/v1/star-wars/'].get.tags[0]).toBe('starWars');
    expect(itemToTest.paths['/v1/star-wars/'].get.summary).toBe('get star wars details');
    expect(itemToTest.paths['/v1/star-wars/'].get.description).toBe('get star wars details');
    expect(itemToTest.paths['/v1/star-wars/'].get.operationId).toBe('v1StarWarsGet');
    expect(itemToTest.paths['/v1/star-wars/'].get.responses[200].description).toBe('Successful fetch');
    expect(itemToTest.paths['/v1/star-wars/'].get.responses[200].schema.$ref).toBe('#/definitions/StarWars');
    expect(itemToTest.paths['/v1/star-wars/'].get.responses[404].description).toBe(
      'Path & method combination not found'
    );
    expect(itemToTest.paths['/v1/star-wars/'].get.parameters[0].$ref).toBe('#/parameters/HeaderSearchId');
    expect(itemToTest.paths['/v1/star-wars/'].get['x-autoTag']).toBe('V1');
    expect(itemToTest.paths['/v1/star-wars/'].get['x-fileName']).toBe('get');
    expect(itemToTest.paths['/v1/star-wars/'].get['x-uniqueOpId']).toBe('v1StarWarsGet');
    expect(itemToTest.paths['/v1/star-wars/'].get['x-template-permission']).toBe('readV1StarWarsGet');
    expect(itemToTest.paths['/v1/star-wars/'].get['x-template-description']).toBe('v1StarWarsGet');
    expect(itemToTest.paths['/v1/star-wars/'].get['x-template-resolution'].a.$ref).toBe('#/parameters/HeaderSearchId');
    expect(itemToTest.paths['/v1/star-wars/'].get['x-template-resolution'].b.$ref).toBe('#/parameters/HeaderSearchId');
    expect(itemToTest.paths['/v1/star-wars/'].get['x-template-resolution'].c.$ref).toBe('#/parameters/HeaderSearchId');
    expect(itemToTest.paths['/v1/star-wars/'].get['x-json-content-test']).toBe('v1StarWarsGet');
    expect(itemToTest.paths['/weather'].get.tags[0]).toBe('weather');
    expect(itemToTest.paths['/weather'].get.summary).toBe('weather search');
    expect(itemToTest.paths['/weather'].get.description).toBe('Search for weather objects');
    expect(itemToTest.paths['/weather'].get.operationId).toBe('v1WeatherGet');
    expect(itemToTest.paths['/weather'].get['x-filename']).toBe('get');
    expect(itemToTest.paths['/weather'].get.parameters[0].$ref).toBe('#/parameters/QueryOffset');
    expect(itemToTest.paths['/weather'].get.parameters[1].$ref).toBe('#/parameters/QueryTextSearch');
    expect(itemToTest.paths['/weather'].get.parameters[2].$ref).toBe('#/parameters/HeaderSearchId');
    expect(itemToTest.paths['/weather'].get.responses[200].description).toBe('Successful fetch');
    expect(itemToTest.paths['/weather'].get.responses[200].schema.properties.meta.$ref).toBe(
      '#/definitions/GenericSearchMeta'
    );
    expect(itemToTest.paths['/weather'].get.responses[200].schema.properties.data.type).toBe('array');
    expect(itemToTest.paths['/weather'].get.responses[200].schema.properties.data.items.$ref).toBe(
      '#/definitions/WeatherModel'
    );
    expect(itemToTest.paths['/weather'].get.responses[404].description).toBe('Path & method combination not found');
    expect(itemToTest.paths['/weather'].get['x-autoTag']).toBe('V1');
    expect(itemToTest.paths['/weather'].get['x-fileName']).toBe('get');
    expect(itemToTest.paths['/weather'].get['x-uniqueOpId']).toBe('v1WeatherGet');
    expect(itemToTest.paths['/weather'].get['x-template-permission']).toBe('readV1WeatherGet');
    expect(itemToTest.paths['/weather'].get['x-template-description']).toBe('v1WeatherGet');
    expect(itemToTest.paths['/weather'].get['x-template-resolution'].a.$ref).toBe('#/parameters/HeaderSearchId');
    expect(itemToTest.paths['/weather'].get['x-template-resolution'].b.$ref).toBe('#/parameters/HeaderSearchId');
    expect(itemToTest.paths['/weather'].get['x-template-resolution'].c.$ref).toBe('#/parameters/HeaderSearchId');
    expect(itemToTest.paths['/weather'].get['x-json-content-test']).toBe('v1WeatherGet');
    expect(itemToTest.paths['/weather'].post.tags[0]).toBe('weather');
    expect(itemToTest.paths['/weather'].post.summary).toBe('weather data');
    expect(itemToTest.paths['/weather'].post.description).toBe('Create a new weather record.');
    expect(itemToTest.paths['/weather'].post.operationId).toBe('v1WeatherPost');
    expect(itemToTest.paths['/weather'].post.parameters[0].in).toBe('body');
    expect(itemToTest.paths['/weather'].post.parameters[0].name).toBe('v1WeatherPost');
    expect(itemToTest.paths['/weather'].post.parameters[0].description).toBe('Optional description in *Markdown*');
    expect(itemToTest.paths['/weather'].post.parameters[0].required).toBe(true);
    expect(itemToTest.paths['/weather'].post.parameters[0].schema.$ref).toBe('#/definitions/WeatherPost');
    expect(itemToTest.paths['/weather'].post.responses[200].description).toBe('Successful temp creation');
    expect(itemToTest.paths['/weather'].post.responses[200].schema.$ref).toBe('#/definitions/WeatherModel');
    expect(itemToTest.paths['/weather'].post.responses[422].description).toBe('Invalid form data provided');
    expect(itemToTest.paths['/weather'].post['x-permission']).toBe('createV1Weather');
    expect(itemToTest.paths['/weather'].post['x-autoTag']).toBe('V1');
    expect(itemToTest.paths['/weather'].post['x-fileName']).toBe('post');
    expect(itemToTest.paths['/weather'].post['x-uniqueOpId']).toBe('v1WeatherPost');
    expect(itemToTest.paths['/weather'].post['x-template-permission']).toBe('createV1WeatherPost');
    expect(itemToTest.paths['/weather'].post['x-template-description']).toBe('v1WeatherPost');
    expect(itemToTest.paths['/weather'].post['x-template-resolution'].a.$ref).toBe('#/parameters/HeaderSearchId');
    expect(itemToTest.paths['/weather'].post['x-template-resolution'].b.$ref).toBe('#/parameters/HeaderSearchId');
    expect(itemToTest.paths['/weather'].post['x-template-resolution'].c.$ref).toBe('#/parameters/HeaderSearchId');
    expect(itemToTest.paths['/weather'].post['x-json-content-test']).toBe('v1WeatherPost');
    expect(itemToTest.paths['/weather/id/{id}'].get.tags[0]).toBe('weather');
    expect(itemToTest.paths['/weather/id/{id}'].get.summary).toBe('One weather object');
    expect(itemToTest.paths['/weather/id/{id}'].get.description).toBe('Get the full weather object');
    expect(itemToTest.paths['/weather/id/{id}'].get.operationId).toBe('v1WeatherIdGet');
    expect(itemToTest.paths['/weather/id/{id}'].get.produces[0]).toBe('application/json');
    expect(itemToTest.paths['/weather/id/{id}'].get.parameters[0].$ref).toBe('#/parameters/PathId');
    expect(itemToTest.paths['/weather/id/{id}'].get.parameters[1].$ref).toBe('#/parameters/HeaderSearchId');
    expect(itemToTest.paths['/weather/id/{id}'].get.responses[200].description).toBe('Successful fetch');
    expect(itemToTest.paths['/weather/id/{id}'].get.responses[200].schema.$ref).toBe('#/definitions/WeatherModel');
    expect(itemToTest.paths['/weather/id/{id}'].get.responses[404].description).toBe(
      'Path & method combination not found'
    );
    expect(itemToTest.paths['/weather/id/{id}'].get['x-permission']).toBe('readV1WeatherId');
    expect(itemToTest.paths['/weather/id/{id}'].get['x-autoTag']).toBe('V1');
    expect(itemToTest.paths['/weather/id/{id}'].get['x-fileName']).toBe('get');
    expect(itemToTest.paths['/weather/id/{id}'].get['x-uniqueOpId']).toBe('v1WeatherIdGet');
    expect(itemToTest.paths['/weather/id/{id}'].get['x-template-permission']).toBe('readV1WeatherIdGet');
    expect(itemToTest.paths['/weather/id/{id}'].get['x-template-description']).toBe('v1WeatherIdGet');
    expect(itemToTest.paths['/weather/id/{id}'].get['x-template-resolution'].a.$ref).toBe(
      '#/parameters/HeaderSearchId'
    );
    expect(itemToTest.paths['/weather/id/{id}'].get['x-template-resolution'].b.$ref).toBe(
      '#/parameters/HeaderSearchId'
    );
    expect(itemToTest.paths['/weather/id/{id}'].get['x-template-resolution'].c.$ref).toBe(
      '#/parameters/HeaderSearchId'
    );
    expect(itemToTest.paths['/weather/id/{id}'].get['x-json-content-test']).toBe('v1WeatherIdGet');
    expect(itemToTest.paths['/weather/id/{id}'].delete.tags[0]).toBe('weather');
    expect(itemToTest.paths['/weather/id/{id}'].delete.summary).toBe('weather set to rain');
    expect(itemToTest.paths['/weather/id/{id}'].delete.description).toBe(
      'Reset awful sunny weather to excellent rainy weather'
    );
    expect(itemToTest.paths['/weather/id/{id}'].delete.operationId).toBe('v1WeatherIdDelete');
    expect(itemToTest.paths['/weather/id/{id}'].delete['x-filename']).toBe('delete');
    expect(itemToTest.paths['/weather/id/{id}'].delete.parameters[0].$ref).toBe('#/parameters/PathId');
    expect(itemToTest.paths['/weather/id/{id}'].delete.parameters[1].$ref).toBe('#/parameters/QueryOffset');
    expect(itemToTest.paths['/weather/id/{id}'].delete.parameters[2].$ref).toBe('#/parameters/QueryTextSearch');
    expect(itemToTest.paths['/weather/id/{id}'].delete.parameters[3].in).toBe('query');
    expect(itemToTest.paths['/weather/id/{id}'].delete.parameters[3].name).toBe('areYouSure');
    expect(itemToTest.paths['/weather/id/{id}'].delete.parameters[3].required).toBe(true);
    expect(itemToTest.paths['/weather/id/{id}'].delete.parameters[3].type).toBe('string');
    expect(itemToTest.paths['/weather/id/{id}'].delete.parameters[4].in).toBe('query');
    expect(itemToTest.paths['/weather/id/{id}'].delete.parameters[4].name).toBe('areYouSureSure');
    expect(itemToTest.paths['/weather/id/{id}'].delete.parameters[4].required).toBe(true);
    expect(itemToTest.paths['/weather/id/{id}'].delete.parameters[4].type).toBe('string');
    expect(itemToTest.paths['/weather/id/{id}'].delete.responses[200].description).toBe('Deleted');
    expect(itemToTest.paths['/weather/id/{id}'].delete.responses[404].description).toBe('Temp not found');
    expect(itemToTest.paths['/weather/id/{id}'].delete['x-permission']).toBe('deleteV1WeatherId');
    expect(itemToTest.paths['/weather/id/{id}'].delete['x-autoTag']).toBe('V1');
    expect(itemToTest.paths['/weather/id/{id}'].delete['x-fileName']).toBe('delete');
    expect(itemToTest.paths['/weather/id/{id}'].delete['x-uniqueOpId']).toBe('v1WeatherIdDelete');
    expect(itemToTest.paths['/weather/id/{id}'].delete['x-template-permission']).toBe('deleteV1WeatherIdDelete');
    expect(itemToTest.paths['/weather/id/{id}'].delete['x-template-description']).toBe('v1WeatherIdDelete');
    expect(itemToTest.paths['/weather/id/{id}'].delete['x-template-resolution'].a.$ref).toBe(
      '#/parameters/HeaderSearchId'
    );
    expect(itemToTest.paths['/weather/id/{id}'].delete['x-template-resolution'].b.$ref).toBe(
      '#/parameters/HeaderSearchId'
    );
    expect(itemToTest.paths['/weather/id/{id}'].delete['x-template-resolution'].c.$ref).toBe(
      '#/parameters/HeaderSearchId'
    );
    expect(itemToTest.paths['/weather/id/{id}'].delete['x-json-content-test']).toBe('v1WeatherIdDelete');
    expect(itemToTest.paths['/weather/id/{id}'].put.tags[0]).toBe('weather');
    expect(itemToTest.paths['/weather/id/{id}'].put.summary).toBe('weather data');
    expect(itemToTest.paths['/weather/id/{id}'].put.description).toBe('Create a new weather record.');
    expect(itemToTest.paths['/weather/id/{id}'].put.operationId).toBe('v1WeatherIdPut');
    expect(itemToTest.paths['/weather/id/{id}'].put.produces[0]).toBe('application/json');
    expect(itemToTest.paths['/weather/id/{id}'].put.parameters[0].$ref).toBe('#/parameters/PathId');
    expect(itemToTest.paths['/weather/id/{id}'].put.parameters[1].in).toBe('body');
    expect(itemToTest.paths['/weather/id/{id}'].put.parameters[1].name).toBe('v1WeatherIdPut');
    expect(itemToTest.paths['/weather/id/{id}'].put.parameters[1].description).toBe(
      'Optional description in *Markdown*'
    );
    expect(itemToTest.paths['/weather/id/{id}'].put.parameters[1].required).toBe(true);
    expect(itemToTest.paths['/weather/id/{id}'].put.parameters[1].schema.$ref).toBe('#/definitions/WeatherIdPut');
    expect(itemToTest.paths['/weather/id/{id}'].put.responses[200].description).toBe('Successful temp creation');
    expect(itemToTest.paths['/weather/id/{id}'].put.responses[200].schema.$ref).toBe('#/definitions/WeatherModel');
    expect(itemToTest.paths['/weather/id/{id}'].put.responses[422].description).toBe('Invalid form data provided');
    expect(itemToTest.paths['/weather/id/{id}'].put['x-permission']).toBe('updateV1WeatherId');
    expect(itemToTest.paths['/weather/id/{id}'].put['x-autoTag']).toBe('V1');
    expect(itemToTest.paths['/weather/id/{id}'].put['x-fileName']).toBe('put');
    expect(itemToTest.paths['/weather/id/{id}'].put['x-uniqueOpId']).toBe('v1WeatherIdPut');
    expect(itemToTest.paths['/weather/id/{id}'].put['x-template-permission']).toBe('updateV1WeatherIdPut');
    expect(itemToTest.paths['/weather/id/{id}'].put['x-template-description']).toBe('v1WeatherIdPut');
    expect(itemToTest.paths['/weather/id/{id}'].put['x-template-resolution'].a.$ref).toBe(
      '#/parameters/HeaderSearchId'
    );
    expect(itemToTest.paths['/weather/id/{id}'].put['x-template-resolution'].b.$ref).toBe(
      '#/parameters/HeaderSearchId'
    );
    expect(itemToTest.paths['/weather/id/{id}'].put['x-template-resolution'].c.$ref).toBe(
      '#/parameters/HeaderSearchId'
    );
    expect(itemToTest.paths['/weather/id/{id}'].put['x-json-content-test']).toBe('v1WeatherIdPut');
    expect(itemToTest.paths['/weather/id/{id}/pattern'].get.tags[0]).toBe('weather');
    expect(itemToTest.paths['/weather/id/{id}/pattern'].get.summary).toBe('One weather object');
    expect(itemToTest.paths['/weather/id/{id}/pattern'].get.description).toBe('Get the full weather object');
    expect(itemToTest.paths['/weather/id/{id}/pattern'].get.operationId).toBe('v1WeatherIdPatternGet');
    expect(itemToTest.paths['/weather/id/{id}/pattern'].get.produces[0]).toBe('application/json');
    expect(itemToTest.paths['/weather/id/{id}/pattern'].get.parameters[0].$ref).toBe('#/parameters/PathId');
    expect(itemToTest.paths['/weather/id/{id}/pattern'].get.parameters[1].$ref).toBe('#/parameters/HeaderSearchId');
    expect(itemToTest.paths['/weather/id/{id}/pattern'].get.responses[200].description).toBe('Successful fetch');
    expect(itemToTest.paths['/weather/id/{id}/pattern'].get.responses[200].schema.$ref).toBe(
      '#/definitions/WeatherModel'
    );
    expect(itemToTest.paths['/weather/id/{id}/pattern'].get.responses[404].description).toBe(
      'Path & method combination not found'
    );
    expect(itemToTest.paths['/weather/id/{id}/pattern'].get['x-permission']).toBe('readV1WeatherIdPattern');
    expect(itemToTest.paths['/weather/id/{id}/pattern'].get['x-autoTag']).toBe('V1');
    expect(itemToTest.paths['/weather/id/{id}/pattern'].get['x-fileName']).toBe('get');
    expect(itemToTest.paths['/weather/id/{id}/pattern'].get['x-uniqueOpId']).toBe('v1WeatherIdPatternGet');
    expect(itemToTest.paths['/weather/id/{id}/pattern'].get['x-template-permission']).toBe('readV1WeatherIdPatternGet');
    expect(itemToTest.paths['/weather/id/{id}/pattern'].get['x-template-description']).toBe('v1WeatherIdPatternGet');
    expect(itemToTest.paths['/weather/id/{id}/pattern'].get['x-template-resolution'].a.$ref).toBe(
      '#/parameters/HeaderSearchId'
    );
    expect(itemToTest.paths['/weather/id/{id}/pattern'].get['x-template-resolution'].b.$ref).toBe(
      '#/parameters/HeaderSearchId'
    );
    expect(itemToTest.paths['/weather/id/{id}/pattern'].get['x-template-resolution'].c.$ref).toBe(
      '#/parameters/HeaderSearchId'
    );
    expect(itemToTest.paths['/weather/id/{id}/pattern'].get['x-json-content-test']).toBe('v1WeatherIdPatternGet');
    expect(itemToTest.paths['/weather/latest'].get.tags[0]).toBe('weather');
    expect(itemToTest.paths['/weather/latest'].get.summary).toBe('lastest weather data');
    expect(itemToTest.paths['/weather/latest'].get.description).toBe('Get the latest temperatures');
    expect(itemToTest.paths['/weather/latest'].get.operationId).toBe('v1WeatherLatestGet');
    expect(itemToTest.paths['/weather/latest'].get.produces[0]).toBe('application/json');
    expect(itemToTest.paths['/weather/latest'].get.responses[200].description).toBe('Successful fetch');
    expect(itemToTest.paths['/weather/latest'].get.responses[200].schema.$ref).toBe('#/definitions/WeatherModels');
    expect(itemToTest.paths['/weather/latest'].get.responses[404].description).toBe('Temp not found');
    expect(itemToTest.paths['/weather/latest'].get['x-autoTag']).toBe('V1');
    expect(itemToTest.paths['/weather/latest'].get['x-fileName']).toBe('get');
    expect(itemToTest.paths['/weather/latest'].get['x-uniqueOpId']).toBe('v1WeatherLatestGet');
    expect(itemToTest.paths['/weather/latest'].get['x-template-permission']).toBe('readV1WeatherLatestGet');
    expect(itemToTest.paths['/weather/latest'].get['x-template-description']).toBe('v1WeatherLatestGet');
    expect(itemToTest.paths['/weather/latest'].get['x-template-resolution'].a.$ref).toBe('#/parameters/HeaderSearchId');
    expect(itemToTest.paths['/weather/latest'].get['x-template-resolution'].b.$ref).toBe('#/parameters/HeaderSearchId');
    expect(itemToTest.paths['/weather/latest'].get['x-template-resolution'].c.$ref).toBe('#/parameters/HeaderSearchId');
    expect(itemToTest.paths['/weather/latest'].get['x-json-content-test']).toBe('v1WeatherLatestGet');
    expect(itemToTest.parameters.HeaderSearchId.in).toBe('header');
    expect(itemToTest.parameters.HeaderSearchId.name).toBe('Search-Id');
    expect(itemToTest.parameters.HeaderSearchId.type).toBe('string');
    expect(itemToTest.parameters.HeaderSearchId.description).toBe('Unique search {id}');
    expect(itemToTest.parameters.HeaderSearchId['x-example']).toBe('569eecd9-9962-4aed-a0f0-30476c6a82ed');
    expect(itemToTest.parameters.PathId.in).toBe('path');
    expect(itemToTest.parameters.PathId.name).toBe('id');
    expect(itemToTest.parameters.PathId.type).toBe('integer');
    expect(itemToTest.parameters.PathId.required).toBe(true);
    expect(itemToTest.parameters.PathId.description).toBe('Numeric ID of object to fetch');
    expect(itemToTest.parameters.QueryOffset.in).toBe('query');
    expect(itemToTest.parameters.QueryOffset.name).toBe('offset');
    expect(itemToTest.parameters.QueryOffset.required).toBe(false);
    expect(itemToTest.parameters.QueryOffset.type).toBe('integer');
    expect(itemToTest.parameters.QueryOffset.description).toBe(
      'The number of items to skip before starting to collect the result set.'
    );
    expect(itemToTest.parameters.QueryTextSearch.in).toBe('query');
    expect(itemToTest.parameters.QueryTextSearch.name).toBe('textSearch');
    expect(itemToTest.parameters.QueryTextSearch.required).toBe(false);
    expect(itemToTest.parameters.QueryTextSearch.type).toBe('string');
    expect(itemToTest.parameters.QueryTextSearch.description).toBe('Search string to query');
    expect(itemToTest.definitions.GenericSearchMeta.properties.totalResultCount.type).toBe('number');
    expect(itemToTest.definitions.GenericSearchMeta.properties.offset.type).toBe('number');
    expect(itemToTest.definitions.GenericSearchMeta.properties.limit.type).toBe('number');
    expect(itemToTest.definitions.StarWars.type).toBe('object');
    expect(itemToTest.definitions.StarWars.properties.empireName.type).toBe('string');
    expect(itemToTest.definitions.StarWars.properties.rebellious.type).toBe('boolean');
    expect(itemToTest.definitions.StarWars.properties.darthVader.type).toBe('boolean');
    expect(itemToTest.definitions.WeatherIdPut.allOf[0].$ref).toBe('#/definitions/WeatherPost');
    expect(itemToTest.definitions.WeatherIdPut.allOf[1].type).toBe('object');
    expect(itemToTest.definitions.WeatherIdPut.allOf[1].properties.id.type).toBe('integer');
    expect(itemToTest.definitions.WeatherModel.type).toBe('object');
    expect(itemToTest.definitions.WeatherModel.properties.id.type).toBe('integer');
    expect(itemToTest.definitions.WeatherModel.properties.date.type).toBe('string');
    expect(itemToTest.definitions.WeatherModel.properties.date.format).toBe('date');
    expect(itemToTest.definitions.WeatherModel.properties.location.type).toBe('string');
    expect(itemToTest.definitions.WeatherModel.properties.cloudCoverPercentage.type).toBe('integer');
    expect(itemToTest.definitions.WeatherModel.properties.humidityPercentage.type).toBe('integer');
    expect(itemToTest.definitions.WeatherModel.properties.temperature.type).toBe('number');
    expect(itemToTest.definitions.WeatherModels.type).toBe('array');
    expect(itemToTest.definitions.WeatherModels.items.$ref).toBe('#/definitions/WeatherModel');
    expect(itemToTest.definitions.WeatherPost.type).toBe('object');
    expect(itemToTest.definitions.WeatherPost.properties.date.type).toBe('string');
    expect(itemToTest.definitions.WeatherPost.properties.date.format).toBe('date');
    expect(itemToTest.definitions.WeatherPost.properties.location.type).toBe('string');
    expect(itemToTest.definitions.WeatherPost.properties.cloudCoverPercentage.type).toBe('integer');
    expect(itemToTest.definitions.WeatherPost.properties.humidityPercentage.type).toBe('integer');
    expect(itemToTest.definitions.WeatherPost.properties.temperature.type).toBe('number');
  });

  it('Should have the correct file hashes', async (done) => {
    // If these tests fail the either:
    // A) The test_swagger.yml has changed
    // B) The tpl for the typescipt server has change
    // C) Something broke when building the said files
    const mismatched = [];
    for (let i = 0; i < paths.length; ++i) {
      const filePath = paths[i][0];
      const fileHash = paths[i][1];
      const hash = await hasha.fromFile(path.join(process.cwd(), filePath), { algorithm: 'md5' });
      if (hash !== fileHash) {
        const wrong = `Hash mis-match for file ${filePath}. Expected hash ${fileHash} but got ${hash}`;
        mismatched.push(wrong);
      }
    }
    if (mismatched.length > 0) {
      done(mismatched);
    } else {
      done();
    }
  });
});
