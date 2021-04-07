FROM mcr.microsoft.com/dotnet/core/sdk:3.1-buster AS build
WORKDIR /src
COPY ["Service.csproj", "."]
RUN dotnet restore "Service.csproj"
COPY [".", "."]
RUN dotnet build "Service.csproj" -c Development -o /app/build
RUN dotnet publish "Service.csproj" -c Development -o /app/publish

FROM mcr.microsoft.com/dotnet/core/aspnet:3.1
WORKDIR /app
EXPOSE 80
COPY --from=build /app/publish .
ENTRYPOINT ["dotnet", "Service.dll"]