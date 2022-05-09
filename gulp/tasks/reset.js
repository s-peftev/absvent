import del from 'del';

export default () => {
    return del(app.path.clean);
}