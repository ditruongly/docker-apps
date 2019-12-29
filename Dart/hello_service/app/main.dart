import 'dart:io';

Future main() async {
  var server = await HttpServer.bind(
    '0.0.0.0',
    8080,
  );

  print('Listening on 0.0.0.0:${server.port}');

  await for (HttpRequest request in server) {
    request.response.write('Hello world!');
    await request.response.close();
  }
}