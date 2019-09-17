# HOTDOCS

## Hugo theme for HOTOSM Documentation sites


### Quick setup instructions

```
git clone https://github.com/hotosm/hot-docs-template mydocssite 
cd mydocssite
git submodule add https://github.com/hotosm/hotdocs themes/hotdocs
echo "theme = "hotdocs" >> config.toml
git submodule add https://github.com/hotosm/documentation-sites data
```


### Installation

This theme depends on the project structure defined in [https://github.com/hotosm/hot-docs-template](https://github.com/hotosm/hot-docs-template)


In your Hugo project root

```sh
git submodule add https://github.com/hotosm/hotdocs themes/hotdocs
```

and set ```hotdocs``` as your theme in your project config.toml file

```toml
theme = "hotdocs"
```

### Usage


Content file structure:

```
├── content
|   ├── _index.md
│   └── pages
│       ├── howto.md
|       └── about.md
```

[Site link header]() depends on ```sites.json``` from this [repo](https://github.com/hotosm/documentation-sites) added as a git submodule in the ```data``` directory of your hugo project.

```
git submodule add https://github.com/hotosm/documentation-sites data
```
