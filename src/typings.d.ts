/* SystemJS module definition */
declare var module: NodeModule;
declare var ENV : string;
interface NodeModule {
  id: string;
}
interface GlobalEnvironment {
  ENV;
}
