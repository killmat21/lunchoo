# lunchoo
A web app to invite other colleagues to come lunch with you.

To deploy POSTGRESQL DATABASE in local:
`docker pull postgres`

`mkdir ${HOME}/postgres-data`

`docker run -d --name lunchoo_postgres -e POSTGRES_PASSWORD=1234 -e POSTGRES_DB=lunchoo -v ${HOME}/postgres-data/:/var/lib/postgresql/data -p 5432:5432 postgres`